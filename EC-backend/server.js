import express from "express";
import products from './data/Products.js';
import dotenv from "dotenv";
import connectDatabase from './config/mongodb.js';
import ImportData from "./Dataimport.js";
import productRoute from "./Routes/productRoutes.js";
import { errorHandler, notFound } from "./Middleware/error.js";

dotenv.config();

const app = express();
connectDatabase()

app.use("/api/import", ImportData)
app.use("/api/products", productRoute)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, console.log(`server run in port ${PORT}`));