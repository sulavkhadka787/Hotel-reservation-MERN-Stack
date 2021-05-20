import {useState} from 'react';
import {toast} from 'react-toastify';
import {login} from '../actions/auth';
import LoginForm from '../components/LoginForm';
import {useDispatch} from 'react-redux';

const Login=({history})=>{

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const dispatch=useDispatch();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log('SEND LOGIN DATA',{email,password});
        try{
            let res=await login({email,password});
            console.log('LOGIN-RESPONSE',res);
            if(res.data){
                console.log('SAVE USER RES IN REDUX AND REIDRECT',res.data);
                window.localStorage.setItem('auth',JSON.stringify(res.data));

                dispatch({
                    type:'LOGGED_IN_USER',
                    payload:res.data
                })

                history.push('/dashboard');
            }
        }catch(err){
            console.log('login-error',err);
            if(err.response.status===400){
                toast.error(err.response.data);
            }
        }
    }

    return(
        <>
            <div className="container-fluid bg-secondary p-5 text-center">
                <h1>Login</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <LoginForm 
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            handleSubmit={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;