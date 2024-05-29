import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO_OLD_VERSION).then(() =>{
    console.log("connected mongo DB");
}).catch((err) =>{
    console.log(err);
})

const app = express();

app.listen(3010, () =>{
    console.log('Server Listening on port 3010')
});

app.use("/api/user", userRoutes);

