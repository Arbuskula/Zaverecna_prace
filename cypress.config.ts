import { defineConfig } from "cypress";

export default defineConfig({
  watchForFileChanges: false,
  projectId: "k6apm6",
  e2e: {
    baseUrl: "https://www.legenio.cz/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
});
