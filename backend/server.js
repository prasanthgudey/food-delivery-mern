import express from "express"
import cors from "cors"
import { config } from "dotenv"
import { connectdb } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/UserRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

// app config
const app = express()
const port =4000

//middleware
app.use(express.json())
app.use(cors())


//db connection
connectdb();


//api endpoint
app.use('/api/food',foodRouter);
app.use('/images',express.static('uploads'))
app.use('/api/user', userRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send("API WORKING");
})
app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

// mongodb+srv://prasanthkumargudeymine:Prasanth2003@cluster0.pcvm6lw.mongodb.net/?