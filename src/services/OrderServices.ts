import orderModel from '../persistence/OrderModel'
import { Order } from '../persistence/OrderModel'

let instance:any=null


class OrderService{
    
    async get(id:string) {
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




