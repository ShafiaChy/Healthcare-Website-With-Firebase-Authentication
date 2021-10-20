import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import './Login.css';



const Login = () => {
    
    const [email, setEmail] =  useState('');
    const [password, setPassword] =  useState('');
    const [error, setError] =  useState('');
    const {auth, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

     const redirect_uri = location.state?.from || '/home';
     

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const loginUsingEmailAndPassword = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            history.push(redirect_uri);
        })
        .catch(error =>{
            setError(error.message)
        })
        
    }
 
    return (
        <div className="pb-5">
            <h1 className="mt-5 d-flex justify-content-center">Welcome Back!</h1>
            <p className="d-flex justify-content-center">Sign in to continue</p>           
            <form onSubmit={loginUsingEmailAndPassword}>
            <div className="row mb-3 ">
                
                <div className="col-sm-10 mx-auto">
                    <input  type="email" onBlur={handleEmailChange} placeholder="Enter your email address" className="form-control mx-auto w-50" id="inputEmail3" required/>
                </div>
            </div>
            <div className="row mb-3">
                
            <div className="col-sm-10 mx-auto">
                <input type="password" onBlur={handlePasswordChange}  placeholder="password" className="form-control mx-auto w-50" id="inputPassword3" required/>
            </div>
        </div>
        <div className="d-flex justify-content-center">
            <span className="text-danger">{error}</span>
        </div>
        <p className="d-flex justify-content-center">Dont have an account? <Link to = '/register'>Register</Link> </p>
       <div className="d-flex justify-content-center">
       <button type="submit" className="btn btn-dark mb-3">Sign in</button>
       </div>
        <hr />
        </form>
         
           <p className="d-flex justify-content-center">or</p>
           
         <div className="d-flex justify-content-center">
            <button className="btn-dark rounded text-white py-2 d-flex justify-content-center" onClick={handleGoogleSignIn}> Sign In With Google</button>
         </div>
         
    </div>
    );
};

export default Login;