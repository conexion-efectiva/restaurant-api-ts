import joi from 'joi'


const ProductsSchema = joi.object({
 
  productId:joi.string().required(),
  
})
const ordenSchema = joi.object({
  userId: joi.string().required(),
  creationDate: joi.string().required(),
  deliverDate: joi.string().required(),
  status: joi.string().required(),
  orderType: joi.string().required(),
  product:joi.array().items(ProductsSchema)
})

export  {ordenSchema}