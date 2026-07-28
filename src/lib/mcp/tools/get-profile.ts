import { defineTool } from "@lovable.dev/mcp-js";
import { profile } from "../data";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description: "Return Akshit Pratiush's basic profile: name, title, location, and contact details.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
    structuredContent: { profile },
  }),
});
