import { generateUserPayload } from "../../../support/utils"
import { requestPostUser } from "../usuarios/apiUsuarios.request"


const apiUrl = Cypress.env('apiUrl')

function requestPostCredentials() {
    const userData = generateUserPayload()

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
    })
}

function requestPostEmpty() {
    return cy.request({
        method: 'POST',
        url: `${apiUrl}/login`,
        failOnStatusCode: false,
    })
}

export { requestPostCredentials, requestPostEmpty }