const express = require('express')
const app = express()
const db = require ('./Config/db.js')
db();
const body = require('body-parser')
app.use(express.json());
const cors = require('cors')
app.use(cors())
// const userRouter = require('./Route/userRoute')
const commandeRouter = require('./Route/commandeRoute')
const productRouter = require('./Route/productRoute')

// app.use('/user', userRouter) 
app.use('/resto/commande', commandeRouter)
app.use('/resto/product', productRouter)


const PORT = process.env.PORT || '4003'

app.listen(PORT,()=>{
    console.log(`server working ${PORT}`)
})