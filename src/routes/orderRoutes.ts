import  express  from "express"
import jwtAuthenticationMiddleware from '../middleware/jwtAuthentication'
const router =express.Router()
import validateBody from '../middleware/validateBody'

import OrderController from '../controller/OrderController'
import {ordenSchema} from '../validators/orderValidator' // esto esta mal, tiene que ser de orden validator

router.get('/order',jwtAuthenticationMiddleware,(req,res) =>OrderController.getInstance().getList(req,res))
router.get('/order/:id', jwtAuthenticationMiddleware,(req,res)=>OrderController.getInstance().getOne(req,res))
router.post('/order',validateBody(ordenSchema),jwtAuthenticationMiddleware,(req,res)=>OrderController.getInstance().post(req,res))
router.put ('/order/:id',validateBody(ordenSchema),jwtAuthenticationMiddleware,(req,res)=>OrderController.getInstance().put(req,res))
router.delete('/order/:id',jwtAuthenticationMiddleware,(req,res)=>OrderController.getInstance().delete(req,res))

export default router