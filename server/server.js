import express from 'express';
import {readdirSync} from 'fs';
import cors from 'cors';
import mongoose from 'mongoose';
const morgan=require('morgan');
require('dotenv').config();

const app=express();

//db connection
mongoose.connect(process.env.DATABASE)
    .then(()=>console.log('DB SUCCESFULLY CONNECTED $$$$$$'))
    .catch((err)=>console.log('FAILED TO CONNECT TO DATABASE !!!!!',err))

//middlwares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//route middlewares
readdirSync('./routes').map((r)=>app.use('/api',require(`./routes/${r}`)));
//app.use('/api',router);

const port=process.env.PORT || 8000;
app.listen((port),()=>console.log(`SERVER IS RUNNING ON PORT ${port}`));