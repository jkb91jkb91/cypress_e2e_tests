const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    baseUrl: 'http://localhost:80', // Dodaj swoją bazową URL
    specPattern: 'cypress/e2e/*.cy.{js,jsx,ts,tsx}', // Ścieżka do testów
    supportFile: false // Wyłącza supportFile
  },
})
