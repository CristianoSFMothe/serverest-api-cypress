describe('DELETE /usuarios', () => {
  let userData

  beforeEach(() => {
    cy.fixture('users').then((data) => {
      userData = data.create
    })
  })

  it('deve deletar um usuário com sucesso', () => {
    const user = userData.success.admin

    cy.deleteUser(user)

    cy.insertUser(user).then((responseInsert) => {

      cy.log(`Usuário criado com ID: ${responseInsert.body._id}`)

      cy.deleteUser(user).then((responseDelete) => {
        expect(responseDelete.status).to.eq(200)
        expect(responseDelete.body.message).to.eq('Registro excluído com sucesso')
      })
    })
  })

  it('não deve excluir quando tenta excluir um ID inexistente', () => {

    cy.deleteUserById('123').should((response) => {
      expect(response.status).to.be.equal(200)
      expect(response.body.message).to.be.equal('Nenhum registro excluído')
    })
  })

})
