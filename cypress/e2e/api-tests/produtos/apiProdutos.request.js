const apiUrl = Cypress.env('apiUrl')
const payloadProdutos = require('../../../fixtures/produtos.payload.json')
const token = Cypress.env('authToken')

function requestGetAllProducts() {
    return cy.request({
        method: 'GET',
        url: `${apiUrl}/produtos`,
    })
}

function requestPostNewProduct(){
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