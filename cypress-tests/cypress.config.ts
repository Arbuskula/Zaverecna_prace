import { defineConfig } from "cypress";

export default defineConfig({
  watchForFileChanges: false,
  e2e: {
    baseUrl: "https://www.legenio.cz/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
});
