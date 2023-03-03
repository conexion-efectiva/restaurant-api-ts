import  express  from "express"

const router =express.Router()
import validateBody from '../middleware/validateBody'
import UserController from '../controller/UserController'

import {userSchema, userUpdateSchema } from'../validators/userValidator'

router.get('/user', (req, res) =>
  UserController.getInstance().getList(req, res)
)
router.get('/user/:id', (req, res) =>
  UserController.getInstance().getOne(req, res)
)
router.post('/user', validateBody(userSchema), (req, res) => UserController.getInstance().post(req, res))
router.put('/user', validateBody(userUpdateSchema), (req, res) => UserController.getInstance().put(req, res))
router.delete('/user', (req, res) =>
  UserController.getInstance().delete(req, res)
)

export default router