import React from 'react';
import {useSelector} from 'react-redux';

const Home=()=>{

      const {user}=useSelector((state)=>({...state}));
      return(
         <>
            <div className="container-fluid h1 p-5 text-center">
               <h1>Home Page{JSON.stringify(user)}</h1>
            </div>
         </>
      )
            
        
};

export default Home;