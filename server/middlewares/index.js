import expressJwt from 'express-jwt';

//it sends req.user by default
export const requireSignin=expressJwt({
    secret:process.env.JWT_SECRET,
    algorithms:["HS256"]
});

