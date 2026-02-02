import { z, defineConfig } from "@botpress/runtime";

export default defineConfig({
  name: "msme-chatbot",
  description: "AI assistant for MSME Pathways - helps Filipino micro-entrepreneurs get loans",

  bot: {
    state: z.object({}),
  },

  user: {
    state: z.object({}),
  },

  dependencies: {
    integrations: {
      webchat: {
        version: "webchat@0.3.0",
        enabled: true,
      },
    },
  },
});
