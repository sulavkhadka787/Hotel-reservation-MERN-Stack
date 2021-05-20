import User from '../models/user';
import Stripe from 'stripe';

const stripe=Stripe(process.env.STRIPE_SECRET);

export const createConnectAccount=async(req,res)=>{
    // 1.find user from db
    const user=await User.findById(req.user._id).exec();
    console.log('user====>',user);

    //2.if user don't have stripe account id yet , create now
    const account=await stripe.accounts.create({
        type:"express"
    })

    console.log('ACCOUNT===>',account);
    
}