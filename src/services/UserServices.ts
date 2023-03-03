import UserModel from   '../persistence/UserModel'
let instance:any

import {User} from '../persistence/UserModel'
class UserService {

    async insert(user:User) {
      return await UserModel.create(user)
    }
  
    async get(id:string) {
      return await UserModel.findOne({ _id: id })
    }
  
    async list() {
      return await UserModel.find()
    }
  
    async delete(id:string) {
      return await UserModel.deleteOne({ _id: id })
    }
  
    async update(user:User) {
      await UserModel.updateOne({_id: user._id}, user)
      return user
    }
  
    static getInstance() {
      if (instance == null) {
        instance = new UserService()
      }
  
      return instance
    }
  }

  export default UserService