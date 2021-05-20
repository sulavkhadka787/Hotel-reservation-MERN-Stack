import express from 'express';

const router=express.Router();

//middlewares
import {requireSignin} from '../middlewares';

//controllers
import {createConnectAccount} from '../controllers/stripe';

router.post('/create-connect-account',requireSignin,createConnectAccount);

module.exports=router;