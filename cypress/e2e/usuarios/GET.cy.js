describe('GET /usuarios', () => {
  it('Deve retornar lista de usuários com sucesso', () => {
    cy.listarTodosUsuarios().then((response) => {
      expect(response.status).to.eq(200)

      // Verifica a estrutura da resposta
      expect(response.body).to.have.property('quantidade')
      expect(response.body).to.have.property('usuarios')

      // Verifica se quantidade é um número
      expect(response.body.quantidade).to.be.a('number')

      // Verifica se usuarios é um array
      expect(response.body.usuarios).to.be.an('array')

      // Verifica se a quantidade corresponde ao número de usuários
      expect(response.body.quantidade).to.equal(response.body.usuarios.length)
    })
  })
})