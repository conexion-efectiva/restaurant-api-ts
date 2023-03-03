import passport from 'passport'
 
import {Strategy  as JwtStrategy}   from 'passport-jwt'
import {ExtractJwt} from 'passport-jwt'
import UserModel from '../persistence/UserModel'
import { Strategy } from 'passport-local'
function initializeAuthentication() {
    passport.use(
      'signup',
      new Strategy(
        {
          usernameField: 'email',
          passwordField: 'password',
        },
        async (email, password, done) => {
          try {
            const user = await UserModel.create({ name:'abc', email, password })
            return done(null, user)
          } catch (error) {
            done(error)
          }
        }
      )
    )
  
    passport.use(
      'login',
      new  Strategy(
        {
          usernameField: 'email',
          passwordField: 'password',
        },
        async (email, password, done) => {
          try {
            const user = await UserModel.findOne({ email })
            if (!user) {
              return done(null, false, { message: 'User not found' })
            }
  
            const validate = await user.isValidPassword(password)
            if (!validate) {
              return done(null, false, { message: 'Wrong password' })
            }
  
            return done(null, user, { message: 'Logged in Succesfully' })
          } catch (error) {
            return done(error)
          }
        }
      )
    )
  
    passport.use(
      new JwtStrategy(
        {
          secretOrKey: process.env.TOKEN_SECRET,
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        },
          (token, done) => {
          try {
            return done(null, token.user)
          } catch (error) {
            done(error)
          }
        }
      )
    )
  
    console.log('Authentication initialized')
  }

  export default initializeAuthentication