import express from 'express';
import router from './routes/auth';

const app=express();

//route middlewares
app.use('/api',router);

app.listen(8000,()=>console.log('SERVER IS RUNNING ON PORT 8000'));