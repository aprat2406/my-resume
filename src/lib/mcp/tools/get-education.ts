import { defineTool } from "@lovable.dev/mcp-js";
import { education } from "../data";

export default defineTool({
  name: "get_education",
  title: "Get education",
  description: "Return Akshit Pratiush's academic education history.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(education, null, 2) }],
    structuredContent: { education },
  }),
});
