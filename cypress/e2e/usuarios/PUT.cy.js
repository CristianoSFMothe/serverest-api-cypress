describe('PUT /usuarios', () => {
  let userData

  beforeEach(() => {
    cy.fixture('users').then((data) => {
      userData = data.edit
    })
  })

  it('deve atualizar dados do usuário com sucesso', () => {
    const user = userData.success.create
    const updatedUser = userData.success.edition
    cy.deleteUser(user)

    cy.insertUser(user).then((response) => {
      const id = response.body._id
      cy.updateUser(id, updatedUser).should((response) => {
        expect(response.status).to.be.equal(200)
        expect(response.body.message).to.be.equal('Registro alterado com sucesso')
      })
    })
  })

  it('deve inserir o usuário quando tentar atualizar um ID de usuário inexistente', () => {
    const user = userData.not_found.new_user
    cy.deleteUser(user)

    cy.updateUser('123', user).should((response) => {
      expect(response.status).to.be.equal(201)
      expect(response.body.message).to.be.equal('Cadastro realizado com sucesso')
    })
  })

  it('não deve inserir usuário quando tenta atualizar um ID de usuário inexistente mas com email cadastrado', () => {
    const user = userData.not_found.duplicated
    cy.deleteUser(user)
    cy.insertUser(user).then(() => {
      cy.updateUser('123', user).should((response) => {
        expect(response.status).to.be.equal(400)
        expect(response.body.message).to.be.equal('Este email já está sendo usado')
      })
    })
  })

  context('testes de atualização com dados inválidos', () => {
    it('não informar o nome', () => {
      const user = userData.success.create
      const updatedUser = userData.success.edition
      cy.deleteUser(user)

      delete updatedUser.nome

      cy.insertUser(user).then((response) => {
        const id = response.body._id

        cy.updateUser(id, updatedUser).should((response) => {

          expect(response.status).to.be.equal(400)
          expect(response.body).to.have.property('nome', 'nome é obrigatório')
        })
      })
    })

    it('não informar o email', () => {
      const user = userData.success.create
      const updatedUser = userData.success.edition
      cy.deleteUser(user)

      delete updatedUser.email

      cy.insertUser(user).then((response) => {
        const id = response.body._id

        cy.updateUser(id, updatedUser).should((response) => {

          expect(response.status).to.be.equal(400)
          expect(response.body).to.have.property('email', 'email é obrigatório')
        })
      })
    })

    it('não informar a senha', () => {
      const user = userData.success.create
      const updatedUser = userData.success.edition
      cy.deleteUser(user)

      delete updatedUser.password

      cy.insertUser(user).then((response) => {
        const id = response.body._id

        cy.updateUser(id, updatedUser).should((response) => {

          expect(response.status).to.be.equal(400)
          expect(response.body).to.have.property('password', 'password é obrigatório')
        })
      })
    })

    it('não informar o se é administrador', () => {
      const user = userData.success.create
      const updatedUser = userData.success.edition
      cy.deleteUser(user)

      delete updatedUser.administrador

      cy.insertUser(user).then((response) => {
        const id = response.body._id

        cy.updateUser(id, updatedUser).should((response) => {

          expect(response.status).to.be.equal(400)
          expect(response.body).to.have.property('administrador', 'administrador é obrigatório')
        })
      })
    })

    it('não informar os campos obrigatórios', () => {
      const user = userData.success.create
      const updatedUser = userData.success.edition
      cy.deleteUser(user)

      delete updatedUser.nome
      delete updatedUser.email
      delete updatedUser.password
      delete updatedUser.administrador

      cy.insertUser(user).then((response) => {
        const id = response.body._id

        cy.updateUser(id, updatedUser).should((response) => {

          expect(response.status).to.be.equal(400)
          expect(response.body).to.have.property('nome', 'nome é obrigatório')
          expect(response.body).to.have.property('email', 'email é obrigatório')
          expect(response.body).to.have.property('password', 'password é obrigatório')
          expect(response.body).to.have.property('administrador', 'administrador é obrigatório')
        })
      })
    })
  })
})