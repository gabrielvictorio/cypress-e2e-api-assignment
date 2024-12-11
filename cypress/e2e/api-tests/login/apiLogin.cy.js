import * as apiLogin from "./apiLogin.request"

describe('Serverrest Login Test - POST', () => {

    it('Successful Login', () => {
        apiLogin.requestPostCredentials().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.message).to.eq("Login realizado com sucesso")
            expect(response.body).to.have.property('authorization')
        })
    })

    it('Unuccessful Login, no credentials', () => {
        apiLogin.requestPostEmpty().should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.email).to.eq("email é obrigatório")
            expect(response.body.password).to.eq("password é obrigatório")
        })
    })

})