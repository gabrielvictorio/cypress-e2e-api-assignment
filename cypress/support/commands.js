Cypress.Commands.add('getAuthToken', () => {
    const email = Cypress.env('email')
    const password = Cypress.env('password')
    const apiUrl = Cypress.env('apiUrl')
    const token = Cypress.env('authToken')
  
    return cy.request({
      method: 'POST',
      url: `${apiUrl}/login`,
      body: {
        email,
        password,
      },
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('authorization')
      Cypress.env('authToken', response.body.authorization)
      return response.body.authorization
    })
  })