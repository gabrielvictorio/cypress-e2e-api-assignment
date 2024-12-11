const apiUrl = Cypress.env('apiUrl')
const payloadProdutos = require('../../../fixtures/produtos.payload.json')

function requestGetAllProducts() {
    return cy.request({
        method: 'GET',
        url: `${apiUrl}/produtos`,
    })
}

function requestPostNewProduct(){
    return cy.request({
        method: 'POST',
        url: `${apiUrl}/produtos`,
        body: payloadProdutos,
        headers: {
            Authorization: token,
          },
        })
    // TO IMPLEMENT A AUTH TOKEN ON CYPRESS COMMANDS
}

export { requestGetAllProducts, requestPostNewProduct }