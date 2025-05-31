describe('GET /usuarios', () => {
  it('Deve retornar lista de usuários com sucesso', () => {
    cy.listAllUsers().then((response) => {
      expect(response.status).to.eq(200)


      expect(response.body).to.have.property('quantidade')
      expect(response.body).to.have.property('usuarios')
      expect(response.body.quantidade).to.be.a('number')
      expect(response.body.usuarios).to.be.an('array')
      expect(response.body.quantidade).to.equal(response.body.usuarios.length)
    })
  })
})