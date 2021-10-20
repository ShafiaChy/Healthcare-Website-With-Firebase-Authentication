import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    
    const { detailId } =useParams();
    const [details,setDetails] = useState([]);
   

         //data load
        useEffect(() => {
        fetch('/gymServices.json')
        .then(res => res.json())
        .then(data => setDetails(data))
 
        },[])
       
       const singleService = details.filter(detail => detail.key == detailId)
           
       

   
    return (
        
        <div className="my-5">
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={singleService[0]?.image} class="img-fluid rounded-start" alt="..."/>
                    </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{singleService[0]?.name}</h5>
                            <p class="card-text">{singleService[0]?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
           
     
   
  
    );
};

export default Details;