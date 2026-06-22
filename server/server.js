import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB4 from './config/db';
import connectDB from './config/db';
import {clerkMiddleware} from '@clerk/express';

const app = express();
const port = 3000;

await connectDB();

app.use(express.json())
app.use(cors())
app.use(clerkMiddleware);

app.get('/',(req ,res)=>{
    res.send("server is Live")
})

app.listen(port,()=>{
    console.log(`Server listening at localhost ${port}`);
})