import React from 'react';
import { useHistory } from 'react-router';
import './Body.css';
const Body = (props) => {
  //destructuring
        const {image, name, description} = props.service;
        const history = useHistory();
        const handleDetails = () => {

            history.push('/details');
        }
    // displaying service information
    return (
        <div className="col ">
            <div className="card bg-image">
         
                <img src={image} className="card-img-top w-75 serviceImage mx-auto mt-3" alt="..."/>
         
            <div className="card-body">
                <h4 className="card-title text-center">{name}</h4>
                <p className="card-text bg-white">{description}</p>
            </div>
           <div className="mb-3 mx-auto">
            <button onClick={handleDetails} className="px-4 py-2 rounded bg-dark text-white" >Details</button>
           </div>
         </div>
        
       </div> 
    );
}

export default Body;