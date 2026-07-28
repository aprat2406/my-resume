import { defineTool } from "@lovable.dev/mcp-js";
import { certifications } from "../data";

export default defineTool({
  name: "get_certifications",
  title: "Get certifications",
  description: "Return Akshit Pratiush's professional certifications.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: certifications.join("\n") }],
    structuredContent: { certifications },
  }),
});
