describe('POST /usuarios', () => {
  let userData

  beforeEach(() => {
    cy.fixture('users').then((data) => {
      userData = data.create
    })
  })

  it('deve cadastrar usuário administrador com sucesso', () => {
    const user = userData.success.admin
    cy.deleteUser(user)

    cy.insertUser(user).then((response) => {
      expect(response.status).to.equal(201)
      expect(response.body.message)
        .to.be
        .equal('Cadastro realizado com sucesso')
    })
  })

  context('Tenta cadastrar usuários com dados inválidos', () => {

    it('deve retornar erro ao tentar cadastrar um usuário com email já existente', () => {
      const user = userData.duplicated

      cy.insertUser(user).then(() => {
        cy.insertUser(user).then((response) => {
          expect(response.status).to.equal(400)
          expect(response.body)
            .to.have
            .property('message', 'Este email já está sendo usado')
        })
      })
    })

    it('deve retornar erro ao tentar cadastrar um usuário sem informar o nome', () => {
      const user = userData.invalid

      delete user.nome

      cy.insertUser(user).then((response) => {

        expect(response.body).to.have.property('nome', 'nome é obrigatório')
      })
    })

    it('deve retornar erro ao tentar cadastrar um usuário sem informar o email', () => {
      const user = userData.invalid

      delete user.email

      cy.insertUser(user).then((response) => {

        expect(response.body).to.have.property('email', 'email é obrigatório')
      })
    })

    it('deve retornar erro ao tentar cadastrar um usuário email inválido', () => {
      const user = userData.invalid_email

      cy.insertUser(user).then((response) => {

        expect(response.body).to.have.property('email', 'email deve ser um email válido')
      })
    })

    it('deve retornar erro ao tentar cadastrar um usuário sem informar a senha', () => {
      const user = userData.invalid

      delete user.password

      cy.insertUser(user).then((response) => {

        expect(response.body).to.have.property('password', 'password é obrigatório')
      })
    })

    it('deve retornar erro ao tentar cadastrar um usuário sem informar o administrador', () => {
      const user = userData.invalid

      delete user.administrador

      cy.insertUser(user).then((response) => {

        expect(response.body).to.have.property('administrador', 'administrador é obrigatório')
      })
    })

    it('deve retornar erro ao tentar cadastrar um usuário sem os campos obrigatórios', () => {
      const user = userData.invalid

      delete user.nome
      delete user.email
      delete user.password
      delete user.administrador

      cy.insertUser(user).then((response) => {
        expect(response.body).to.have.property('nome', 'nome é obrigatório')
        expect(response.body).to.have.property('email', 'email é obrigatório')
        expect(response.body).to.have.property('password', 'password é obrigatório')
        expect(response.body).to.have.property('administrador', 'administrador é obrigatório')
      })
    })
  })

})

