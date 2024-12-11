# Test Cases Serverest - E2E Front end Admin User

### Registering a new Admin user successfully
    Given that a user access the "/cadastrarusuarios" url, fills name, email, password properly and checks the admin checkbobx option.
    When the user clicks on the submit button labeled "Cadastrar".
    Then the user can see an alert message on screen that contains "Cadastro realizado com sucesso"

### Successful login with admin user 
    Given that a admin user access the "/login" url, fills email, password correctly.
    When the user clicks on the submit button labeled "Entrar".
    Then the user is authorized and redirected to the "/admin/home" url.

### Successful logout with admin user
    Given that a admin user logges in successfully to "/admin/home" url.
    When the user clicks on the "Logout" button.
    Then the user redirected back to the "/login" url.

# Test Cases Serverest - E2E Front Admin User Actions

### Successfully register a new user
    Given that a admin user logges in successfully to "/admin/home" url.
    When the admin user clicks on "Cadastrar Usuários" on the nav bar.
    And fills name, email and password fields properly.
    And clicks on the "Cadastrar" button.
    Then the user redirected to the "/admin/listarusuarios" url.