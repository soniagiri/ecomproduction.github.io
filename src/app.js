import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.router.js";

const app = express();
// app.use(cors({
//     origin:process.env.CORS_ORIGIN,
//     credentials:true
// }))
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" })); //yha pe issue ho sakta hao
app.use(express.static("public"));
app.use(cookieParser());

// routes
app.use("/api/v1/users", userRouter)
export default app;
