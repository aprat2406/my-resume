import { defineTool } from "@lovable.dev/mcp-js";
import { experience } from "../data";

export default defineTool({
  name: "get_experience",
  title: "Get work experience",
  description: "Return Akshit Pratiush's professional experience history (companies, roles, periods, highlights).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(experience, null, 2) }],
    structuredContent: { experience },
  }),
});
