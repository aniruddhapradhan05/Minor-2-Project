import express from "express"
import cors from "cors"
const app = express()
import cookieParser from "cookie-parser";

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({
    limit: "10kb"
}))
app.use(cookieParser())
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

import userRouter from "./routes/user.routes.js"
app.use("/", userRouter)
export {app}