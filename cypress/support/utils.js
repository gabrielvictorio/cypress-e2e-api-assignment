const { faker } = require('@faker-js/faker')

function generateUserPayload() {
  return {
    nome: faker.name.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: "true"
  }
}

export { generateUserPayload }