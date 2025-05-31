Cypress.Commands.add('listAllUsers', () => {
  cy.api({
    method: 'GET',
    url: '/usuarios',
    headers: { 'content-type': 'application/json', },
    failOnStatusCode: false
  }).then((response) => {
    return response
  })
})

Cypress.Commands.add('insertUser', (user) => {
  cy.api({
    method: 'POST',
    url: '/usuarios',
    body: user,
    failOnStatusCode: false
  }).then((response) => {
    return response
  })
})