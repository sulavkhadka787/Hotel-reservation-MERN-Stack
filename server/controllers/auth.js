import User from '../models/user';

export const register=async(req,res)=>{
    console.log('rea-body-register',req.body);
    const {name,email,password}=req.body;

    //validation
    if(!name){
        return res.status(400).send('Name is required');
    }

    if(!password || password.length <6){
        return res.status(400).send('Password is required and should be min six characters long');
    }

    let userExists=await User.findOne({email}).exec();
    if(userExists){
        return res.status(400).send('Email is taken');
    }

    const user=new User(req.body);
    try{

        await user.save();
        console.log('USER CREATED',user);
        return res.json({ok:true})

    }catch(err){
        console.log('CREATE USER FAILED',err);
        return res.status(400).send('Error. Try again');
    }
}