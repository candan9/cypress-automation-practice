const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 30000,
  env: {
    signIn: {
      email: "teqqqs2suetmailforvirgosol@gmail.com",
      password: "Ee1234012400.",
    },
  },
  screenshotsFolder: false,
  video: false,
  projectId: "i8o7aa",
  e2e: {
    baseUrl: "https://automationpractice.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
