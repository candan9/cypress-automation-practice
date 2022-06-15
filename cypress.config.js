const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 30000,
  env: {
    signIn: {
      email: "teqqqs2su3asdeetmailforvirgosol@gmail.com",
      password: "Ee1234012400.",
    },
  },
  screenshotsFolder:false,
  screenshotOnRunFailure:false,
  video: false,
  projectId: "i8o7aa",
  e2e: {
    baseUrl: "https://automationpractice.com",
  },
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
  }
});
