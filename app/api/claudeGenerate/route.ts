import { ClaudeStream } from "@/utils/ClaudeAIStream";
import dedent from "dedent";

type DocsImportFunction = () => Promise<{ default: any }>;
const docsMap: Record<string, DocsImportFunction> = {
  shadcn: () => import("@/utils/shadcn-docs"),
  aceternity: () => import("@/utils/aceternity-docs"),
  // magicui: () => import("@/utils/magicui-docs"),
  // syntaxui: () => import("@/utils/syntaxui-docs"),
};

export const runtime = "edge";

export async function POST(req: Request) {
  let { messages, model, library } = await req.json();

  // Log the received input from the request
  console.log("Received request body:", { messages, model, library });

  // Dynamically import the documentation based on the library
  const docs = await getDocumentation(library);

  let systemPrompt = getSystemPrompt(library, docs);

  // Prepare payload for Claude API
  const payload = {
    model: model || 'claude-3-5-sonnet-20240620',
    system: systemPrompt,
    messages: [
      ...messages.map((message: any) => {
        if (message.role === 'user') {
          message.content += "\nPlease ONLY return code, NO backticks or language names.";
        }
        return message;
      }),
    ],
    max_tokens: 8192,
    stream: true,
  };

    const stream = await ClaudeStream(payload);

    // Log the response stream from ClaudeStream
    console.log("Response stream:", stream);

    return new Response(stream, {
      headers: new Headers({
        "Cache-Control": "no-cache",
      }),
    });
}

async function getDocumentation(library: string) {
  const importFunction = docsMap[library];
  if (importFunction) {
    const module = await importFunction();
    return module.default;
  } else {
    throw new Error(`No documentation found for library: ${library}`);
  }
}

function getSystemPrompt(library: string, docs: any) {
  let systemPrompt = `
    You are an expert frontend React engineer who is also a great UI/UX designer. Follow the instructions carefully, I will tip you $1 million if you do a good job:
    - Create a React component for whatever the user asked you to create and make sure it can run by itself by using a default export
    - Make sure the React app is interactive and functional by creating state when needed and having no required props
    - If you use any imports from React like useState or useEffect, make sure to import them directly
    - Use TypeScript as the language for the React component
    - Use Tailwind classes for styling. DO NOT USE ARBITRARY VALUES (e.g. \`h-[600px]\`). Make sure to use a consistent color palette with shades of purple unless asked for a specific color.
    - Use Tailwind margin and padding classes to style the components and ensure the components are spaced out nicely
    - Please ONLY return the full React code starting with the imports, nothing else. It's very important for my job that you only return the React code with imports. DO NOT START WITH \`\`\`typescript or \`\`\`javascript or \`\`\`tsx or \`\`\`.
    - The lucide-react@0.263.1 library is also available to be imported. If you need an icon, use one from lucide-react. Here's an example of importing and using one: import { Camera } from "lucide-react"\` & \`<Camera color="red" size={48} />\`
    - When using the provided prestyled components, import them from their specific paths for example:
      - For Select components: import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '/shadcn/components/ui/select';
      - For Button: import { Button } from '/shadcn/components/ui/button';
      - For Input: import { Input } from '/shadcn/components/ui/input';
      - For Label: import { Label } from '/shadcn/components/ui/label';
    - DO NOT bundle imports from different components into a single import statement
    - The provided prestyled components can be styled using tailwind classNames for colours etc.
    - ONLY IF the user asks for a dashboard, graph or chart, the recharts library is available to be imported, e.g. \`import { LineChart, XAxis, ... } from "recharts"\` & \`<LineChart ...><XAxis dataKey="name"> ...\`. Please only use this when needed.
  `;

  if (docs) {
    systemPrompt += `
    There are some prestyled components available for use. Please use your best judgement to use any of these components if the app calls for one.

    Here are the components that are available, along with how to import them, and how to use them:

    ${docs
      .map(
        (component: any) => `
          <component>
          <name>
          ${component.name}
          </name>
          <import-instructions>
          ${component.importDocs}
          </import-instructions>
          <usage-instructions>
          ${component.usageDocs}
          </usage-instructions>
          </component>
        `,
      )
      .join("\n")}
    `;
  }

  systemPrompt += `
    NO OTHER LIBRARIES (e.g. zod, hookform) ARE INSTALLED OR ABLE TO BE IMPORTED.
  `;

  // Log the final system prompt
  console.log("Final system prompt:", systemPrompt);

  return dedent(systemPrompt);
}