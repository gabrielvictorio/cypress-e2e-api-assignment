describe('template spec', () => {

  const selectorList = {
    emailField: '[data-testid="email"]',
    passwordLoginField: '[data-testid="senha"]',
    passwordRegisterField: '[data-testid="password"]',
    nameField: '[data-testid="nome"]',
    loginButton: '[data-testid="entrar"]',
    registerButton: '[data-testid="cadastrar"]',
    searchBar: '[data-testid="pesquisar"]',
    productList: '[data-testid="lista-de-compras"]',
    homePage: '[data-testid="home"]',
    pageAlert: '.alert',
    registerAdminCheckbox: '[data-testid="checkbox"]',
    logoutButton: '[data-testid="logout"]'
  }

  it('Register a new admin user', () => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios')
    cy.get(selectorList.nameField).type('Joao')
    cy.get(selectorList.emailField).type('trial_example@test.com')
    cy.get(selectorList.passwordRegisterField).type('passkey')
    cy.get(selectorList.registerAdminCheckbox).click()
    cy.get(selectorList.registerButton).click()
    cy.get(selectorList.pageAlert).contains('Cadastro realizado com sucesso')
  })

  it('Successful login with admin user', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get(selectorList.emailField).type('trial_example@test.com')
    cy.get(selectorList.passwordLoginField).type('passkey')
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal','admin/home')
  })

  it('Successful logout with admin user', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get(selectorList.emailField).type('trial_example@test.com')
    cy.get(selectorList.passwordLoginField).type('passkey')
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal','/admin/home')
    cy.get(selectorList.logoutButton).click()
    cy.location('pathname').should('equal','/login')
  })

})