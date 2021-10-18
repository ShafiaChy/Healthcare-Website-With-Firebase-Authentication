import React from 'react';
import {useState,useEffect} from 'react';
import { Carousel } from 'react-bootstrap';
import slideOne from '../../Images/slide1.jpg'
import slideTwo from '../../Images/slide2.jpg'
import slideThree from '../../Images/slide3.jpg'
import Body from '../Body/Body';


import './Home.css'

const Home = () => {
    // services data state
   const [services, setServices] = useState([]);
    //data load
    useEffect(() => {
        fetch('./gymServices.json')
        .then(res => res.json())
        .then(data => setServices(data))
 
        },[])
    return (
        <div>
         <Carousel>
                
                <Carousel.Item interval={1000}>
                   
                    <Carousel.Caption className="caption">
                        <h1>The Kardio Klub.</h1>
                        <h3>Our Gym is Your Gym</h3>
                        <p>Kick your feet up! With a gym designed around you, we think you’ll love it here.</p>
                    </Carousel.Caption>
                    <img className="image-sizing w-100" src={slideOne} alt="First slide"/>
                </Carousel.Item>
                
                <Carousel.Item interval={1000}>
                    <img className="image-sizing w-100" src={slideTwo} alt="Second slide"/>
                    <Carousel.Caption className="caption">
                        <h1>The Kardio Klub.</h1>
                        <p>We’ve got all the equipment you need to sprint, jog or walk your way to your fitness goals. We’re cheering for you!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img className="image-sizing w-100" src={slideThree} alt="Three slide"/>
                    <Carousel.Caption className="caption">
                        <h1>The Kardio Klub.</h1>
                        <p>Bulk up, trim down, or just rock out to your favorite playlist. Our free weights, shiny machines, and cutting-edge equipment are the gear to get you there.</p>
                    </Carousel.Caption>
                    
                </Carousel.Item>
            </Carousel>
            <div className="mt-3">
                <h1>Services We Offer!</h1>
            </div>
            <hr />
            <div className="row row-cols-1 row-cols-lg-3 g-4 my-5 mx-4">
               {
                   services.map(service =><Body
                    key = {service.key}
                    service = {service}></Body>)
               }
               
            </div>
  
        </div>
    );
};

export default Home;