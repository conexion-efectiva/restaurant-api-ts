import  express  from "express"

const router =express.Router()
import validateBody from '../middleware/validateBody'


import passport from 'passport'

import AuthController from'../controller/AuthController'

import { authLoginSchema } from'../validators/authValidator'
import { userSchema } from'../validators/userValidator'

router.post(
  '/signup',
  validateBody(userSchema),
  passport.authenticate('signup', { session: false }),
  (req, res) => {
    AuthController.getInstance().signup(req, res)
  }
)

router.post('/login', validateBody(authLoginSchema), (req, res, next) => {
  AuthController.getInstance().login(req, res, next)
})

export default router