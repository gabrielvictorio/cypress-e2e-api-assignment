# Test Cases Serverest - API /login route

### Registered User can successfully login
    Given that a user has already been registered with success.
    When a request is made to /login with the correct credentials.
    Then the response is successful with status 200
    And body.message contains "Login realizado com sucesso""
    And body.authorization is present.

### Wrong credentials request receives an error
    Given that a user has already been registered with success.
    When a request is made to /login with the incorrect credentials.
    Then the response is unsuccessful with status 401
    And body.message contains "Email e/ou senha inválidos"

### No credentials request receives an error
    Given a request is made to /login with the no credentials.
    Then the response is unsuccessful with status 400
    And body.email contains "email é obrigatório"
    And body.password contains "password é obrigatório"