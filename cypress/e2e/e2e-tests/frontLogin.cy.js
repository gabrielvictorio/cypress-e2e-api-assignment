const baseUrl = Cypress.env('baseUrl')

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

  const userData ={
    name: 'Joao',
    email: 'trial_example@test.com',
    password: 'passkey'
  }

  // TO IMPLEMENT FUNCTION TO DYNAMICALLY CREATE AND ERASE USER DATA - Flaky due to test mass and serverrest database reset

  // it('Register a new admin user', () => {
  //   cy.visit(`${baseUrl}/cadastrarusuarios`)
  //   cy.get(selectorList.nameField).type(userData.name)
  //   cy.get(selectorList.emailField).type(userData.email)
  //   cy.get(selectorList.passwordRegisterField).type(userData.password)
  //   cy.get(selectorList.registerAdminCheckbox).click()
  //   cy.get(selectorList.registerButton).click()
  //   cy.get(selectorList.pageAlert).contains('Cadastro realizado com sucesso')
  // })

  it('Successful login with admin user', () => {
    cy.visit(`${baseUrl}/login`)
    cy.get(selectorList.emailField).type(userData.email)
    cy.get(selectorList.passwordLoginField).type(userData.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal','/admin/home')
  })

  it('Successful logout with admin user', () => {
    cy.visit(`${baseUrl}/login`)
    cy.get(selectorList.emailField).type(userData.email)
    cy.get(selectorList.passwordLoginField).type(userData.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal','/admin/home')
    cy.get(selectorList.logoutButton).click()
    cy.location('pathname').should('equal','/login')
  })

})