import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from "eventsource-parser";

export type ChatGPTAgent = "user" | "system";

export interface ChatGPTMessage {
  role: ChatGPTAgent;
  content: string;
}

export interface TogetherAIStreamPayload {
  model: string;
  messages: ChatGPTMessage[];
  stream: boolean;
  temperature: number;
}

export async function TogetherAIStream(payload: TogetherAIStreamPayload) {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  // Log the payload that is about to be sent
  console.log("Sending payload to TogetherAI:", payload);

  let res;

  if (process.env.HELICONE_API_KEY) {
    res = await fetch("https://together.helicone.ai/v1/chat/completions", {
      headers: {
        "Content-Type": "application/json",
        "Helicone-Auth": `Bearer ${process.env.HELICONE_API_KEY}`,
        Authorization: `Bearer ${process.env.TOGETHER_API_KEY ?? ""}`,
      },
      method: "POST",
      body: JSON.stringify(payload),
    });
  } else {
    res = await fetch("https://api.together.xyz/v1/chat/completions", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TOGETHER_API_KEY ?? ""}`,
      },
      method: "POST",
      body: JSON.stringify(payload),
    });
  }

  // Log the response status after the request
  console.log("Received response status:", res.status, res.statusText);

  const readableStream = new ReadableStream({
    async start(controller) {
      // callback
      const onParse = (event: ParsedEvent | ReconnectInterval) => {
        if (event.type === "event") {
          const data = event.data;
          console.log("Parsed event data:", data);
          controller.enqueue(encoder.encode(data));
        }
      };

      // optimistic error handling
      if (res.status !== 200) {
        const data = {
          status: res.status,
          statusText: res.statusText,
          body: await res.text(),
        };
        console.log(
          `Error: received non-200 status code, ${JSON.stringify(data)}`,
        );
        controller.close();
        return;
      }

      // stream response (SSE) from TogetherAI may be fragmented into multiple chunks
      // this ensures we properly read chunks and invoke an event for each SSE event stream
      const parser = createParser(onParse);
      // https://web.dev/streams/#asynchronous-iteration
      for await (const chunk of res.body as any) {
        console.log("Received chunk from response body:", chunk);
        parser.feed(decoder.decode(chunk));
      }
    },
  });

  let counter = 0;
  const transformStream = new TransformStream({
    async transform(chunk, controller) {
      const data = decoder.decode(chunk);
      // Log the data being transformed
      console.log("Transforming chunk data:", data);

      if (data === "[DONE]") {
        console.log("Stream complete. Received [DONE] signal.");
        controller.terminate();
        return;
      }
      try {
        const json = JSON.parse(data);
        const text = json.choices[0].delta?.content || "";
        if (counter < 2 && (text.match(/\n/) || []).length) {
          // this is a prefix character (i.e., "\n\n"), do nothing
          return;
        }
        // stream transformed JSON response as SSE
        const payload = { text: text };
        console.log("Streaming transformed payload:", payload);
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify(payload)}\n\n`),
        );
        counter++;
      } catch (e) {
        // Log the error if parsing fails
        console.error("Error during transformation:", e);
        controller.error(e);
      }
    },
  });

  // Log when the stream is being piped through the transform stream
  console.log("Piping readable stream through transform stream...");

  return readableStream.pipeThrough(transformStream);
}