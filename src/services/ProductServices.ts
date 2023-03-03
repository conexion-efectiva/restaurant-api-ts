import ProductsModel from  '../persistence/ProductsModel'
let instance:any
import {Product} from '../persistence/ProductsModel'

class ProductService {
    async get(id:string) {
      return await ProductsModel.find({ _id: id })
    }
  
    async list() {
      return await ProductsModel.find()
    }
  
    async insert(product:Product) {
      const result = await ProductsModel.create(product)
      return result.toObject()
    }
  
    async update(product:Product) {
      await ProductsModel.updateOne({ _id: product._id }, product)
      return product
    }
  
    async delete(id:string) {
      return await ProductsModel.deleteOne({ _id: id })
    }
  
    static getInstance() {
      if (instance == null) {
        instance = new ProductService()
      }
  
      return instance
    }
  }

  export default ProductService