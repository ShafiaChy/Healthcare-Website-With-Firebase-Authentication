import React from 'react';
import {useState,useEffect} from 'react';
import { Carousel } from 'react-bootstrap';
import slideOne from '../../Images/slide1.jpg'
import slideTwo from '../../Images/slide2.jpg'
import slideThree from '../../Images/slide3.jpg'
import Body from '../Body/Body';
import positive from '../../Images/positive.png'
import inclusive from '../../Images/inclusive.png'
import fun from '../../Images/fun.png'

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
                <h1 className="text-center">Services We Offer!</h1>
            </div>
            <hr />
            {/* sending props */}
            <div className="row row-cols-1 row-cols-lg-3 g-5 my-5 mx-4">
               {
                   services.map(service =><Body
                    key = {service.key}
                    service = {service}></Body>)
               }
               
            </div>
            {/* Extra Section one */}
            <section className="py-5">
            <h3 className="text-center">No Judgments are the Best Kind</h3>
            <p className="text-center">Differences are encouraged. Quirks are welcomed.</p>
            <div className="card-group ">
                <div className="card">
                    <img src={positive} className="card-img-top" alt="..."/>
                        <div className="card-body">
                         <h5 className="card-title text-center">POSITIVITY</h5>
                            <p className="card-text text-center">We are nurturers: we seek only to encourage, entertain, and empower.</p>
                        </div>
    
                </div>
            <div className="card">
                <img src={inclusive} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-center">INCLUSIVITY</h5>
                            <p className="card-text text-center">Here we keep open minds. There is no one type or way in our diverse community. Come as you are!</p>
                    </div>

            </div>
            <div className="card">
                <img src={fun} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-center">FUN</h5>
                        <p className="card-text text-center">We know serious fitness is hard, but that doesn’t mean it can’t be an edge-of-your-seat, can’t-get-enough, look-forward-to-your-workouts party.</p>
                </div>
    
             </div>
            </div>

                {/* Extra Section Two */}
            </section>
            <section className="py-5">
                <div className="py-5">
                    <h3 className="text-center">Get Our Newsletter!</h3>
                    <div className="d-flex justify-content-center">
                    <input  className="w-50" type="text" placeholder="enter your email address" />
                    <button className="bg-dark text-white rounded py-2">Subscribe</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;