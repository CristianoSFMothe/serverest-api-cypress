Cypress.Commands.add('listarTodosUsuarios', () => {
  cy.api({
    method: 'GET',
    url: '/usuarios',
    headers: { 'content-type': 'application/json', },
    failOnStatusCode: false
  }).then((response) => {
    return response
  })
})