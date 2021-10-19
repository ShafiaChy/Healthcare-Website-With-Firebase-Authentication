
import React from 'react';
import { Link } from "react-router-dom";
import useHooks from '../../Hooks/useHooks';



const Register = () => {
  
    const {signInWithGoogle} = useHooks();
  
 
    return (
        <div className="pb-5">
             <h1 className="mt-5 d-flex justify-content-center">Heya New Member!</h1>
            <p className="d-flex justify-content-center">Sign up to continue</p>    
             <form>
            <div className="row mb-3 ">
                
                <div className="col-sm-10 mx-auto">
                    <input type="email" placeholder="Enter your email address" className="form-control mx-auto w-50" id="inputEmail3" required/>
                </div>
            </div>
            <div className="row mb-3">
               
            <div className="col-sm-10 mx-auto ">
                <input type="password" placeholder="Password" className="form-control mx-auto w-50" id="inputPassword3" required/>
            </div>
        </div>
        <div className="row mb-3 ">
                
            <div className="col-sm-10 mx-auto">
                <input type="password" placeholder="Confirm Password" className="form-control mx-auto w-50" id="inputPassword4" required/>
            </div>
        </div>
 
        {/* <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                    <label className="form-check-label" for="gridCheck1">Example checkbox</label>
                </div>
            </div>
        </div> */}
        <p className="ms-2 d-flex justify-content-center">Already have an account? <Link to = '/login'>Login</Link> </p>
        <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-dark mb-3">Sign up</button>
        </div>
        <hr />
        </form>
        <p className="d-flex justify-content-center">or</p>
           
           <div className="d-flex justify-content-center">
           <button className="btn-dark rounded text-white py-2" onClick={signInWithGoogle}> Sign In With Google</button>
           </div>
           
        </div>
    );
};

export default Register;