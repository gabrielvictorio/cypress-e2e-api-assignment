import { generateUserPayload } from '../../support/utils'
import { selectorList } from '../../support/selectors'

describe('Serverrest Front - Admin User', () => {

  const userData = generateUserPayload()

  it('Register a new admin user', () => {
    cy.registerUser(userData)
    cy.get(selectorList.pageAlert).contains('Cadastro realizado com sucesso')
  })

  it('Successful login with admin user', () => {
    cy.loginUser(userData)
    cy.location('pathname').should('equal','/admin/home')
  })

  it('Successful logout with admin user', () => {
    cy.loginUser(userData)
    cy.location('pathname').should('equal','/admin/home')
    cy.logout()
    cy.location('pathname').should('equal','/login')
  })

})