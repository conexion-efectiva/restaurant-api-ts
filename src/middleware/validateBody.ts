import { Request,Response,NextFunction } from "express"   
import Joi from "joi"
function validateBody(schema:Joi.ObjectSchema<any>) {
  return function (req:Request, res:Response, next:NextFunction) {
    const { error } = schema.validate(req.body)
    if (error == null) {
      next()
    } else {
      res.status(400).json({ error: error.message })
    }
  }
}

export default validateBody