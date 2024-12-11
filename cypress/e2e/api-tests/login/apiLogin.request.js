const apiUrl = Cypress.env('apiUrl')

function requestPostCredentials(userData) {

    cy.request({
        method: 'POST',
        url: `${apiUrl}/usuarios`,
        body: userData,
    }).should((response) => {
      expect(response.status).to.eq(201)
    })

    return cy.request({
        method: 'POST',
        url: `${apiUrl}/login`,
        body: {
            password: userData.password,
            email: userData.email
          },
    })
}

function requestPostWrongCredentials(userData) {

    return cy.request({
        method: 'POST',
        url: `${apiUrl}/login`,
        body: {
            password: userData.password,
            email: "example@gmail.com"
          },
        failOnStatusCode: false,
    })
}

function requestPostEmpty() {
    return cy.request({
        method: 'POST',
        url: `${apiUrl}/login`,
        failOnStatusCode: false,
    })
}

export { requestPostCredentials, requestPostWrongCredentials, requestPostEmpty }