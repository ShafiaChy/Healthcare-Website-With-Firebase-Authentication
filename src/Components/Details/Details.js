import React from 'react';

const Details = (props) => {
    
    const {image,name,description} = props;

   
    return (
        
        <div>
            <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
            <div class="card">
            <img src={image} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{description}</p>
            </div>
    </div>
  </div>
  </div>
        </div>
    );
};

export default Details;<h1>This is Details</h1>