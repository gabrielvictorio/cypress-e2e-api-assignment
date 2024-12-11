import payloadLogin from '../../../fixtures/login.payload.json'

const apiUrl = Cypress.env('apiUrl')

function requestPostCredentials() {
    return cy.request({
        method: 'POST',
        url: `${apiUrl}/login`,
        body: payloadLogin,
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