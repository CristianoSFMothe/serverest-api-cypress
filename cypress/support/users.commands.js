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

Cypress.Commands.add('listUserByName', (userName) => {
  cy.api({
    method: 'GET',
    url: '/usuarios',
    qs: { nome: userName },
    failOnStatusCode: false,
  }).then((response) => {
    return response
  })
})

Cypress.Commands.add('deleteUser', (user) => {
  cy.api({
    url: `/usuarios?email=${user.email}`,
    method: 'GET',
    failOnStatusCode: false
  }).then((response) => {
    if (response.status == 200 && response.body.quantidade == 1) {
      const id = response.body.usuarios[0]._id
      cy.api({
        url: `/usuarios/${id}`,
        method: 'DELETE',
        failOnStatusCode: false
      }).then((response) => response)
    }
  })
})

Cypress.Commands.add('deleteUserById', (id) => {
  cy.api({
    url: `/usuarios/${id}`,
    method: 'DELETE',
    failOnStatusCode: false
  }).then((response) => {
    return response
  })
})