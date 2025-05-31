require('dotenv').config()

const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter')

cypress.run({
})
  .then((results) => {
    const args = {
      target: process.env.TESULTS_TOKEN,
    }
    tesults.results(results, args)
  })
  .catch((err) => {
    console.error(err)
  })