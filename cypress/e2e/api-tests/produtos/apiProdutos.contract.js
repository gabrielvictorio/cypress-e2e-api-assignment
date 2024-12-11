import Joi from 'joi'

const produtosSchema = Joi.object({
  quantidade: Joi.number(),
  produtos: Joi.array().items(
    Joi.object({
      nome: Joi.string().required(), 
      preco: Joi.number().required(), 
      descricao: Joi.string().required(), 
      quantidade: Joi.number().required(), 
      imagem: Joi.string().optional(),
      _id: Joi.string().required(),
    })
  )
})
 
export default produtosSchema;