const  cucumber = require('cypress-cucumber-preprocessor').default

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/*.feature",
    viewportHeight: 900,
    viewportWidth: 1350,  
    video: true,
    videoCompression: 32,
    videosFolder: 'cypress/results/videos',
    screenshotsFolder: 'cypress/results/screenshots',
  },
});
