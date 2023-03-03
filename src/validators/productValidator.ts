import joi from 'joi'

const ProductSchema = joi.object({
  name: joi.string().required(),
  price: joi.number().required(),
  category: joi.string().required(),
})

export   { ProductSchema }
