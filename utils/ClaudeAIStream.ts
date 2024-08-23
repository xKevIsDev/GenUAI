import { createParser, ParsedEvent, ReconnectInterval } from "eventsource-parser";

export async function ClaudeStream(payload: any) {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  console.log("Sending payload to Anthropic:", payload);


  try {
    let res;
    res = await fetch("https://api.anthropic.com/v1/messages", {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `${process.env.ANTHROPIC_API_KEY ?? ""}`,
        "anthropic-version": "2023-06-01",
      },
      method: "POST",
      body: JSON.stringify(payload),
    });


    if (res.status !== 200) {
      const errorData = await res.text();
      console.error("Error response body:", errorData);
      throw new Error(`API request failed with status ${res.status}: ${res.statusText}`);
    }

    const readableStream = new ReadableStream({
      async start(controller) {
        const onParse = (event: ParsedEvent | ReconnectInterval) => {
          if (event.type === "event") {
            const data = event.data;
            controller.enqueue(encoder.encode(data));
          }
        };

        const parser = createParser(onParse);
        try {
          for await (const chunk of res.body as any) {
            parser.feed(decoder.decode(chunk));
          }
        } catch (error) {
          console.error("Error reading response body:", error);
          controller.error(error);
        }
      },
    });

    let counter = 0;
    const transformStream = new TransformStream({
      async transform(chunk, controller) {
        const data = decoder.decode(chunk);

        if (data.includes("message_stop")) {
          console.log("Stream complete. Received message_stop signal.");
          controller.terminate();
          return;
        }
        try {
          const json = JSON.parse(data);
          const text = json.delta?.text || "";
          if (counter < 2 && (text.match(/\n/) || []).length) {
            return;
          }
          const payload = { text: text };
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(payload)}\n\n`));
          counter++;
        } catch (e) {
          console.error("Error during transformation:", e);
          controller.error(e);
        }
      },
    });

    console.log("Piping readable stream through transform stream...");
    return readableStream.pipeThrough(transformStream);

  } catch (error) {
    console.error("Error during ClaudeStream processing:", error);
    throw error;
  }
}