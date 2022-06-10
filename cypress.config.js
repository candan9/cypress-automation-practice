const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 30000,
  env: {
    signIn: {
      email: "teqqqs2sueetmailforvirgosol@gmail.com",
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
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
  },
  reporterEnabled: "spec, mocha-junit-reporter",
  mochaJunitReporterReporterOptions: {
    mochaFile: "cypress/results/junit/results-[hash].xml",
  },
});
