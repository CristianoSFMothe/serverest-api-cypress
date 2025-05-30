const { defineConfig } = require('cypress')
const { configureAllureAdapterPlugins } = require('@mmisty/cypress-allure-adapter/plugins')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config)
      return config
    },
    baseUrl: 'http://localhost:3000',
    screenshotOnRunFailure: false,
    experimentalRunAllSpecs: true,
    video: false,
  },
  env: {
    allure: true,
  }
})
