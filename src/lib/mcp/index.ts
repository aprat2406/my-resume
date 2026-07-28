import { defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import getExperience from "./tools/get-experience";
import getSkills from "./tools/get-skills";
import getEducation from "./tools/get-education";
import getCertifications from "./tools/get-certifications";
import getAwards from "./tools/get-awards";
import getPublications from "./tools/get-publications";

export default defineMcp({
  name: "akshit-pratiush-portfolio",
  title: "Akshit Pratiush Portfolio",
  version: "0.1.0",
  instructions:
    "Public MCP server exposing Akshit Pratiush's portfolio: profile, work experience, skills, education, certifications, awards, and publications. All tools are read-only.",
  tools: [
    getProfile,
    getExperience,
    getSkills,
    getEducation,
    getCertifications,
    getAwards,
    getPublications,
  ],
});
