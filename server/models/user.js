import mongoose from 'mongoose';
const {Schema}=mongoose;

const userSchema=mongoose.Schema({
    name:{
        type:String,
        trim:true,
        requied:'Name is required'
    },
    email:{
        type:String,
        trim:true,
        required:'Email is required'
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:64
    },
    stripe_account_id:'',
    stripe_seller:{},
    stripeSession:{}
},

    {timestamps:true}

)

export default mongoose.model('User',userSchema);