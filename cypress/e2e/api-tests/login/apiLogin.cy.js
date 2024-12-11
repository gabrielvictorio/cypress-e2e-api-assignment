import * as apiLogin from "./apiLogin.request"
import { generateUserPayload } from "../../../support/utils"


describe('Serverrest Login Test - POST', () => {

    const userData = generateUserPayload()

    it('Successful Login', () => {
        apiLogin.requestPostCredentials(userData).should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.message).to.eq("Login realizado com sucesso")
            expect(response.body).to.have.property('authorization')
        })
    })

    it('Unsuccessful Login, wrong credentials', () => {
        apiLogin.requestPostWrongCredentials(userData).should((response) => {
            expect(response.status).to.eq(401)
            expect(response.body.message).to.eq("Email e/ou senha inválidos")
        })
    })

    it('Unsuccessful Login, no credentials', () => {
        apiLogin.requestPostEmpty().should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.email).to.eq("email é obrigatório")
            expect(response.body.password).to.eq("password é obrigatório")
        })
    })

})