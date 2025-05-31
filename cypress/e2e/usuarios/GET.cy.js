describe('GET /usuarios', () => {
  let userData

  beforeEach(() => {
    cy.fixture('users').then((data) => {
      userData = data.create
    })
  })

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

  it('deve retornar um usuário específico com sucesso', () => {
    const user = userData.success.admin

    cy.insertUser(user).then(() => {
      cy.listUserByName(user.nome).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('quantidade')
        expect(response.body).to.have.property('usuarios')
        expect(response.body.quantidade).to.be.a('number')
        expect(response.body.usuarios).to.be.an('array')
        expect(response.body.quantidade).to.equal(response.body.usuarios.length)
        expect(response.body.usuarios[0].nome).to.eq(user.nome)
      })
    })

    cy.deleteUser(user)
  })
})