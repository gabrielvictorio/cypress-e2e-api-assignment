import { generateUserPayload } from "../../../support/utils"

const apiUrl = Cypress.env('apiUrl')

function requestGetAllUsers() {
    return cy.request({
        method: 'GET',
        url: `${apiUrl}/usuarios`,
    })
}

function requestPostUser() {

    const userData = generateUserPayload()

    return cy.request({
        method: 'POST',
        url: `${apiUrl}/usuarios`,
        body: userData,
    })
} 

export { requestGetAllUsers , requestPostUser}