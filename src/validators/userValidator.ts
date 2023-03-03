import joi from 'joi'

const userSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required()
})

const userUpdateSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
  _id: joi.string().required()
})

export  { userSchema, userUpdateSchema }