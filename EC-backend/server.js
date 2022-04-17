import express from "express";
import dotenv from "dotenv";
import connectDatabase from './config/mongodb.js';
import productRoute from "./Routes/productRoutes.js";
import { errorHandler, notFound } from "./Middleware/error.js";
import userRouter from "./Routes/userRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";
dotenv.config();

const app = express();
app.use(express.json());
connectDatabase()

// request api
app.use("/api/products", productRoute)
app.use("/api/users", userRouter)
app.use("/api/orders", orderRouter)

app.get("/api/config/paypal", (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID);
  });
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, console.log(`server run in port ${PORT}`));