import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import { connectDb } from "./config/connectDb.js"
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"

dotenv.config()

const app = express()

app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}))

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server was runninng", PORT)
    connectDb()
})

