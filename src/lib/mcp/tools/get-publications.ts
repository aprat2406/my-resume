import { defineTool } from "@lovable.dev/mcp-js";
import { publications } from "../data";

export default defineTool({
  name: "get_publications",
  title: "Get publications and videos",
  description: "Return Akshit Pratiush's public technical tutorials and video contributions.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(publications, null, 2) }],
    structuredContent: publications,
  }),
});
