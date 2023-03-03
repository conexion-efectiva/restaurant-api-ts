
import passport from "passport"
const jwtAuthenticationMiddleware = passport.authenticate('jwt', {session: false})

export default jwtAuthenticationMiddleware