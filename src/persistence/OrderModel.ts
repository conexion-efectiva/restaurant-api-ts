
import mongoose from 'mongoose'
import { Schema, Types } from 'mongoose';

interface Product  {
    productId: Types.ObjectId;
}

export interface Order{
    userId: string,
    creationDate: string,
    deliverDate: string,
    status: string,  
    orderType: string,
    product: Product,
    _id:Types.ObjectId
}

const OrdersSchema = new Schema<Order>({
    userId: {type:String,required:true},
    creationDate: {type:String,required:true},
    deliverDate: {type:String,required:true},
    status: {type:String,required:true},  
    orderType: {type:String,required:true},
    product: {type: Array,required:true},
})

const ordersModel = mongoose.model('orders', OrdersSchema)

export default ordersModel
