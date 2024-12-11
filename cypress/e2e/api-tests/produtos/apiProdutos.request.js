import {faker} from '@faker-js/faker'

const apiUrl = Cypress.env('apiUrl')
const token = Cypress.env('authToken')

function requestGetAllProducts() {
    return cy.request({
        method: 'GET',
        url: `${apiUrl}/produtos`,
    })
}

function requestPostNewProduct(){

    const payloadProdutos = {
        nome: faker.commerce.productName(),
        preco: faker.number.int(),
        descricao: faker.commerce.productDescription(),
        quantidade: faker.number.int()
    }

    return cy.getAuthToken().then((token) => {
        cy.request({
        method: 'POST',
        url: `${apiUrl}/produtos`,
        body: payloadProdutos,
        headers: {
            Authorization: token,
          },
        })
    })
}


export { requestGetAllProducts, requestPostNewProduct }