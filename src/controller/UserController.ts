import UserService from '../services/UserServices'
let instance:any
import { Request,Response,NextFunction } from "express"
class UserController {
    /**
     *
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     */
    async getList(req:Request, res:Response) {
      const users = await UserService.getInstance().list()
      res.json(users)
    }
  
    /**
     *
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     */
    async getOne(req:Request, res:Response) {
      const user = await UserService.getInstance().get(req.params.id)
      res.json(user)
    }
  
    /**
     *
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     */
    async post(req:Request, res:Response) {
      const user = await UserService.getInstance().get(req.body)
      res.json(user)
    }
  
    /**
     *
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     */
    async put(req:Request, res:Response) {
      const existentUser = await UserService.getInstance().get(req.body._id)
      if (existentUser == null) {
        res.status(404).json({})
        return
      }
      const user = await UserService.getInstance().update(req.body)
      res.json(user)
    }
  
    /**
     *
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     */
    async delete(req:Request, res:Response) {
      const existentUser = await UserService.getInstance().get(req.params.id)
      if (existentUser == null) {
        res.status(404).json({})
        return
      }
  
      UserService.getInstance().delete(req.params.id)
      res.json(existentUser)
    }
  
    static getInstance() {
      if (instance == null) {
        instance = new UserController()
      }
  
      return instance
    }
  }

  export default UserController