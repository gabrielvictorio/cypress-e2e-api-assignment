import * as apiUsuarios from "./apiUsuarios.request"
import usuariosSchema from "./apiUsuarios.contract"


describe('Serverrest Usuarios Test - GET',() => {

    it('List all registered Users', () => {
        apiUsuarios.requestGetAllUsers().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('quantidade')
            expect(response.body.usuarios).to.be.an('array');
            expect(response.body.usuarios.length).to.be.greaterThan(0)
        })
    })

    it ('Validate Contract for Usuario Schema', () => {
        apiUsuarios.requestGetAllUsers().should((response) => {
            return usuariosSchema.validateAsync(response.body)
        })
    })
})

describe('Serverrest Usuarios Test - POST',() => {

    it('Register the User', () => {
        apiUsuarios.requestPostUser().should((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.message).to.eq("Cadastro realizado com sucesso")
            expect(response.body).to.have.property('_id')
        })
    })

})