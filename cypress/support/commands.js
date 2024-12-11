import { selectorList } from "./selectors" 
import { generateUserPayload } from "./utils"


//Command to retrieve a Token when necesary in the Test cases
Cypress.Commands.add('getAuthToken', () => {
    const userData = generateUserPayload()
    const apiUrl = Cypress.env('apiUrl')
    const token = Cypress.env('authToken')
    
    //Creates a new user registry
      cy.request({
      method: 'POST',
      url: `${apiUrl}/usuarios`,
      body: userData,
  }).should((response) => {
    expect(response.status).to.eq(201)
  })
  
    return cy.request({
      method: 'POST',
      url: `${apiUrl}/login`,
      body: {
        password: userData.password,
        email: userData.email
      },
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('authorization')
      Cypress.env('authToken', response.body.authorization)
      return response.body.authorization
    })
  })

  //Commands below to register/login/logout user and reduce clutter on the spec code. 

  Cypress.Commands.add('registerUser', (user) => {
    cy.visit(`${Cypress.env('baseUrl')}/cadastrarusuarios`)
    cy.get(selectorList.nameField).type(user.nome)
    cy.get(selectorList.emailField).type(user.email)
    cy.get(selectorList.passwordRegisterField).type(user.password)
    cy.get(selectorList.registerAdminCheckbox).click()
    cy.get(selectorList.registerButton).click()
  })

  Cypress.Commands.add('loginUser', (user) => {
    cy.visit(`${Cypress.env('baseUrl')}/login`)
    cy.get(selectorList.emailField).type(user.email)
    cy.get(selectorList.passwordLoginField).type(user.password)
    cy.get(selectorList.loginButton).click()
  })

  Cypress.Commands.add('logout', () => {
    cy.get(selectorList.logoutButton).click()
  })