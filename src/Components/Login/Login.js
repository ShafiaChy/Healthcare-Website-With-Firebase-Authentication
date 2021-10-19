import React from 'react';
import { Link } from "react-router-dom";
//import useAuth from '../../Hooks/useAuth';

import useHooks from '../../Hooks/useHooks';
import './Login.css';


const Login = () => {

     const { signInWithGoogle } = useHooks();
 
    return (
        <div className="pb-5">
            <h1 className="mt-5 d-flex justify-content-center">Welcome Back!</h1>
            <p className="d-flex justify-content-center">Sign in to continue</p>           
            <form>
            <div className="row mb-3 ">
                
                <div className="col-sm-10 mx-auto">
                    <input type="email" placeholder="Enter your email address" className="form-control mx-auto w-50" id="inputEmail3" required/>
                </div>
            </div>
            <div className="row mb-3">
                
            <div className="col-sm-10 mx-auto">
                <input type="password" placeholder="password" className="form-control mx-auto w-50" id="inputPassword3" required/>
            </div>
        </div>
 
        <p className="d-flex justify-content-center">Dont have an account? <Link to = '/register'>Register</Link> </p>
       <div className="d-flex justify-content-center">
       <button type="submit" className="btn btn-dark mb-3">Sign in</button>
       </div>
        <hr />
        </form>
         
           <p className="d-flex justify-content-center">or</p>
           
         <div className="d-flex justify-content-center">
         <button className="btn-dark rounded text-white py-2 d-flex justify-content-center" onClick={signInWithGoogle}> Sign In With Google</button>
         </div>
         
    </div>
    );
};

export default Login;