import { z, defineConfig } from "@botpress/runtime";

export default defineConfig({
  name: "msme-chatbot",
  description: "An AI agent built with Botpress ADK",

  bot: {
    state: z.object({}),
  },

  user: {
    state: z.object({}),
  },

  dependencies: {
    integrations: {},
  },
});
