import express from 'express'
import initializeAuthentication from './auth/authentication'
const app = express()
const port = process.env.PORT || 8080
import mongoose from 'mongoose'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

app.use(express.json())



import  productRoutes from './routes/productRoutes'
import userRoutes  from'./routes/userRoutes'
import authRoutes from'./routes/authRoutes'
import orderRoutes from'./routes/orderRoutes'
async function main() {
   await mongoose.connect(process.env.DB_MONGO as string)
   console.log('Base de datos conectada')
 
  initializeAuthentication() 
  app.use('/api',orderRoutes)
 app.use('/api', authRoutes)
 app.use('/api', userRoutes)
 app.use('/api', productRoutes)
 
  app.listen(port, () => {
    console.log('App listening on port ', port)
  }) 

}
main()