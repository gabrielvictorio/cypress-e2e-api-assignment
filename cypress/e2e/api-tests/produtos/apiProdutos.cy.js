import * as apiProdutos from "./apiProdutos.request"
import produtosSchema from "./apiProdutos.contract"

describe('Serverrest Produtos Test - POST', () => {

    it('Register a product', () => {
        apiProdutos.requestPostNewProduct().should((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.message).to.eq("Cadastro realizado com sucesso")
            expect(response.body).to.have.property('_id')
        })
    })

})

describe('Serverrest Produtos Test - GET', () => {

    it('List all products', () => {
        apiProdutos.requestGetAllProducts().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('quantidade')
            expect(response.body.usuarios).to.be.an('array');
            expect(response.body.usuarios.length).to.be.greaterThan(0)
        })
    })

    it ('Validate Contract for Produtos Schema', () => {
        apiProdutos.requestGetAllProducts().should((response) => {
            return produtosSchema.validateAsync(response.body)
        })
    })
})
