import {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {LoadingOutlined} from '@ant-design/icons';
import {getAccountStatus} from '../actions/stripe';

const StripeCallback=({history})=>{
    const {auth}=useSelector((state)=>({...state}));
    const dispatch=useDispatch();

    useEffect(()=>{
        if(auth && auth.token){
            accountStatus();
        }
    },[auth])

    const accountStatus=async()=>{
        try{
            const res=await getAccountStatus(auth.token);
            console.log('USER ACCOUNT status on stripe callback',res)
        }catch(err){
            console.log(err);
        }
    }

    return(
        <div className="d-flex justify-content-center p-5">
            <LoadingOutlined className="display-1 h1 p-5 text-danger" />
        </div>
    )
}
export default StripeCallback;