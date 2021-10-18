import React from 'react';
import './Body.css';
const Body = (props) => {
  //destructuring
        const {image, name, description} = props.service;
        console.log(props);
    // displaying service information
    return (
        <div className="col">
            <div className="card">
         
                <img src={image} className="card-img-top  serviceImage" alt="..."/>
         
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
           <div className="mb-3">
            <button className="px-4 py-2 rounded bg-dark text-white" >Details</button>
           </div>
         </div>
        
       </div> 
    );
}

export default Body;