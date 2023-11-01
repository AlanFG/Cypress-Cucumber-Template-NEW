const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const dotenvPlugin = require('cypress-dotenv');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config = dotenvPlugin(config)
        on(
          "file:preprocessor",
          createBundler({
            plugins: [createEsbuildPlugin.default(config)],
          })
        );
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: "cypress/{e2e/features/*.feature,integration/*.js}",
    chromeWebSecurity: false,
    failOnStatusCode: false,
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php'
  },
});
