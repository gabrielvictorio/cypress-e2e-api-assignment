const { faker } = require('@faker-js/faker')

function generateUserPayload() {
  return {
    nome: faker.name.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: "true"
  }
}

function generateProductPayload() {
  return{
      nome: faker.commerce.productName(),
      preco: faker.number.int(),
      descricao: faker.commerce.productDescription(),
      quantidade: faker.number.int()
  }
}

export { generateUserPayload, generateProductPayload }