import * as apiUsuarios from "./apiUsuarios.request"


describe('Serverrest Usuatios Test - GET',() => {

    it('Listar todos os usuarios', () => {
        apiUsuarios.requestGetAllUsers().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('quantidade')
            expect(response.body.usuarios).to.be.an('array');
            expect(response.body.usuarios.length).to.be.greaterThan(0)
        })
    })

})

describe('Serverrest Usuatios Test - POST',() => {

    it('Cadastrar o usuario', () => {
        apiUsuarios.requestPostUser().should((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.message).to.eq("Cadastro realizado com sucesso")
            expect(response.body).to.have.property('_id')
        })
    })

})