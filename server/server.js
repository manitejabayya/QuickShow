import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = 3000;

app.use(express.json())
app.use(cors())

app.get('/',(req ,res)=>{
    res.send("server is Live")
})

app.listen(port,()=>{
    console.log(`Server listening at localhost ${port}`);
})