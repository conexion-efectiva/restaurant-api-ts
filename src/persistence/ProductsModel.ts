import mongoose, { Schema ,  Types} from 'mongoose';

export interface Product {
    name:string
    category: string;
    price: number;
    _id:Types.ObjectId
}

const productSchema = new Schema<Product>({
    name:{type:String,required:true},
    category: { type: String, required: true},
    price: { type: Number, required: true}
})

const ProductsModel=mongoose.model('products',productSchema)

export default ProductsModel