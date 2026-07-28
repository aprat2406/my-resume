import { defineTool } from "@lovable.dev/mcp-js";
import { skills } from "../data";

export default defineTool({
  name: "get_skills",
  title: "Get core skills",
  description: "Return Akshit Pratiush's core technical skills.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: skills.join("\n") }],
    structuredContent: { skills },
  }),
});
