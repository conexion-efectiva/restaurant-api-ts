import orderModel from '../persistence/OrderModel'
import { Order } from '../persistence/OrderModel'
import {Types} from 'mongoose'
let instance:any=null


class OrderService{
    
    async get(id:string) {
      const valid= Types.ObjectId.isValid(id)

      if(!valid){
        return Promise.resolve(null)
      }
        return await orderModel.find({ _id: id })
      }
    
      async list() {
        return await orderModel.find()
      }
    
      async update(order:Order) {
        await orderModel.updateOne({ _id: order._id }, order)
        return order
      }
    
      async insert(order:Order) {
        const result = await orderModel.create(order)
        return result.toObject()
      }
    
      async delete(id:string) {
        return await orderModel.deleteOne({ _id: id })
      }
    
      static getInstance() {
        if (instance == null) {
          instance = new OrderService()
        }
    
        return instance
      }
    }

    export default OrderService




