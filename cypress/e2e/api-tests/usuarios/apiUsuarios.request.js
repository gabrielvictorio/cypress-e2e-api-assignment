import {faker} from '@faker-js/faker'

const apiUrl = Cypress.env('apiUrl')

function requestGetAllUsers() {
    return cy.request({
        method: 'GET',
        url: `${apiUrl}/usuarios`,
    })
}

function requestPostUser() {

    const payloadUsuarios = {
        nome: faker.name.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        administrador: "true"
    }

    return cy.request({
        method: 'POST',
        url: `${apiUrl}/usuarios`,
        body: payloadUsuarios,
    })
} 

export { requestGetAllUsers , requestPostUser}