import { defineTool } from "@lovable.dev/mcp-js";
import { awards } from "../data";

export default defineTool({
  name: "get_awards",
  title: "Get awards",
  description: "Return awards and recognitions received by Akshit Pratiush across employers.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(awards, null, 2) }],
    structuredContent: { awards },
  }),
});
