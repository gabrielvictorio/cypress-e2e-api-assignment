const payloadUsuario = require('../../../fixtures/usuario.payload.json')
const apiUrl = Cypress.env('apiUrl')

function requestGetAllUsers() {
    return cy.request({
        method: 'GET',
        url: `${apiUrl}/usuarios`,
    })
}

function requestPostUser() {
    return cy.request({
        method: 'POST',
        url: `${apiUrl}/usuarios`,
        body: payloadUsuario,
        // TO ADD A DYNAMICALLY GENERATING DATA FOR USER DATA PAYLOAD
    })
} 

export { requestGetAllUsers , requestPostUser}