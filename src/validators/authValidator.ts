
import joi from 'joi'
const authLoginSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required()
})

export  { authLoginSchema }