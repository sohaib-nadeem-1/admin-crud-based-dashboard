import express from "express";
import cors from "cors"
import productroutes from "./Routes/product.route.js"
import userRoutes from "./Routes/user.routes.js";

const app = express()

app.use(cors())
app.use(express.json())



app.use('/api/apple',productroutes)
app.use('/api/acc',userRoutes)



export default app
