import passport from "passport";
import jwt from 'jsonwebtoken'
import UserService from '../services/UserServices'
let instance:any
import { Request,Response,NextFunction,Express } from "express"
import {User} from '../persistence/UserModel'
class AuthController {
    /**
     *
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     */
    signup(req:Request, res:Response) {
      const user  = req.user as  User
      user.name = req.body.name
      UserService.getInstance().update(user)
      res.json({
        message: 'Signup successful',
        user: { email: user.email },
      })
    }
  
    /**
     *
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @param {import('express').NextFunction} next
     */
    login(req:Request, res:Response, next:NextFunction) {
      passport.authenticate('login', (err, user) => {
        try {
          if (err || !user) {
            const error = new Error('Error during login')
            return next(error)
          }
  
          req.login(user, { session: false }, (error) => {
            if (error) {
              return next(error)
            }
  
            const body = { _id: user._id, email: user.email }
            const token = jwt.sign({ user: body }, (process.env.TOKEN_SECRET as string))
  
            return res.json({ token })
          })
        } catch (error) {
          return next(error)
        }
      })(req, res, next)
    }
  
    /**
     *
     * @returns {AuthController}
     */
    static getInstance() {
      if (instance == null) {
        instance = new AuthController()
      }
  
      return instance
    }
  }

export default AuthController