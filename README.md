# 🧪 Cypress E2E Tests para a API do Serverest

Este projeto realiza testes automatizados end-to-end da API [Serverest](https://serverest.dev/) utilizando o **Cypress**. Ele está integrado ao **GitHub Actions**, **Cypress Cloud**, **Tesults** e utiliza o **Allure Report** para geração de relatórios. Também adota boas práticas de código com **ESLint** e o plugin **cypress-plugin-api**.

---

## 🚀 Tecnologias e Ferramentas Utilizadas

- **Cypress**: Framework de testes E2E.
- **Serverest**: API simulada para testes.
- **GitHub Actions**: Execução contínua em CI.
- **Cypress Cloud**: Monitoramento e relatórios visuais.
- **Tesults**: Relatórios personalizados com controle avançado.
- **Allure Report**: Relatórios interativos.
- **ESLint**: Análise estática de código.
- **cypress-plugin-api**: Simplifica requisições de API no Cypress.

---

## 🧩 Estrutura de Pastas

```text
.github/
└── workflows/
    ├── cypress.yml         # Pipeline para Cypress Cloud
    └── tesults.yml         # Pipeline para Tesults

cypress/
├── e2e/
│   └── usuarios/
│       ├── DELETE.cy.js    # Testes de exclusão de usuários
│       ├── GET.cy.js       # Testes de listagem de usuários
│       ├── POST.cy.js      # Testes de criação de usuários
│       └── PUT.cy.js       # Testes de atualização de usuários
├── fixtures/
│   └── users.json          # Massa de dados dos testes
├── support/
│   ├── e2e.js              # Configuração de comandos personalizados
│   └── users.commands.js   # Custom commands para testes de usuários
├── .eslintrc.json          # Regras específicas para código Cypress
cypress.config.js           # Configurações principais do Cypress

.gitignore                  # Arquivos e pastas ignorados pelo Git
.eslintrc.json              # Regras de lint globais
package.json                # Dependências e scripts
runner.js                   # Execução com Tesults
yarn.lock                   # Lockfile do Yarn
```

---

## 📦 Scripts disponíveis

Execute os comandos abaixo com `yarn`:

```json
"scripts": {
  "cy:open": "cypress open",
  "cy:open:mobile": "cypress open --config viewportWidth=410,viewportHeight=860",
  "test": "cypress run",
  "test:mobile": "cypress run --config viewportWidth=410,viewportHeight=860",
  "test:cloud": "cypress run --record",
  "allure:serve": "npx allure serve",
  "lint": "eslint cypress/**/*.js && eslint cypress.config.js",
  "lint:fix": "eslint cypress/**/*.js --fix && eslint cypress.config.js --fix",
  "serverest:start": "npx serverest@latest",
  "test:tesults": "node runner.js"
}
```

---

## ▶️ Como Executar os Testes

1. Instale as dependências:

```bash
yarn install
```

2. Inicie o Serverest localmente:

```bash
yarn serverest:start
```

3. Em outro terminal, execute os testes:

- **Visualmente (modo interativo)**:

```bash
yarn cy:open
```

- **Modo headless**:

```bash
yarn test
```

- **Enviar para Cypress Cloud**:

```bash
yarn test:cloud
```

- **Enviar para Tesults** (adicione seu token diretamente no `runner.js`):

```bash
yarn test:tesults
```

---

## 📊 Comparativo: Cypress Cloud x Tesults x GitHub Actions

| Recurso                     | **Cypress Cloud**                                           | **Tesults**                                                            | **GitHub Actions**                                      |
| --------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------- |
| **Plano Gratuito**          | Sim (com limitações de histórico e paralelismo)             | Sim (limitado a 50 resultados por projeto)                             | Sim                                                     |
| **Histórico de Execuções**  | Sim                                                         | Sim                                                                    | Não (sem painel nativo de histórico de execuções)       |
| **Anexos (vídeos, prints)** | Sim                                                         | Sim                                                                    | Não (necessário configurar upload de artefatos)         |
| **Dashboards Interativas**  | Sim (com filtros, falhas, retrys, insights de performance)  | Sim (com visual moderno, agrupamento por build, status detalhados)     | Não (usado apenas como orquestrador de execução)        |
| **Preço a partir de**       | [\$67/mês](https://www.cypress.io/cloud)                    | [\$19/mês](https://www.tesults.com/)                                   | Gratuito para repositórios públicos e 2.000 minutos/mês |
| **Ideal para**              | Equipes que já usam Cypress e querem visibilidade integrada | Projetos que exigem mais personalização e controle sobre os relatórios | Automatizar execução, upload e integração com CI/CD     |

---

## 📐 Boas práticas com ESLint e Plugins

### Por que usar o ESLint?

- Padroniza o código.
- Evita erros comuns.
- Facilita o trabalho em equipe.
- Ajuda em revisões de código.

### Plugin `cypress-plugin-api`

- Substitui `cy.request` por `cy.api`.
- Melhora os logs e facilita o uso de testes com APIs REST.

Perfeito! Aqui está a versão final do `README.md` **com o convite para colaboração** e o **link do repositório** incluído no final:

---

## 🤝 Contribuindo com o Projeto

Este repositório está aberto para contribuições! Se você deseja sugerir melhorias, corrigir bugs ou adicionar novos testes:

1. Faça um fork do projeto.
2. Crie uma branch com sua feature ou correção:

   ```bash
   git checkout -b minha-feature
   ```

3. Commit suas alterações:

   ```bash
   git commit -m 'feat: adiciona nova funcionalidade'
   ```

4. Envie para o GitHub:

   ```bash
   git push origin minha-feature
   ```

5. Abra um Pull Request no repositório original.

🔗 **Acesse o repositório:** [github.com/CristianoSFMothe/cypress-api-serverest](https://github.com/CristianoSFMothe/cypress-api-serverest)
