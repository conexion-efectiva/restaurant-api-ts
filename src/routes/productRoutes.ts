import  express  from "express"
import jwtAuthenticationMiddleware from '../middleware/jwtAuthentication'
const router =express.Router()
import validateBody from '../middleware/validateBody'
import ProductController from '../controller/ProductController'
import {ProductSchema} from'../validators/productValidator'

router.get('/products',jwtAuthenticationMiddleware,(req,res)=> ProductController.getInstance().getList(req,res))
router.get('/products/:id',jwtAuthenticationMiddleware,(req,res)=>ProductController.getInstance().getOne(req,res))
router.post('/products',validateBody(ProductSchema),jwtAuthenticationMiddleware,(req,res)=>ProductController.getInstance().post(req,res))
router.put('/products/:id',validateBody(ProductSchema),jwtAuthenticationMiddleware,(req,res)=>ProductController.getInstance().put(req,res))
router.delete('/products/:id',jwtAuthenticationMiddleware,(req,res)=>ProductController.getInstance().delete(req,res))

export default router