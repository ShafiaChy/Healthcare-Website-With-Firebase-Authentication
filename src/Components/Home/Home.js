import React from 'react';
import { Carousel } from 'react-bootstrap';
import slideOne from '../../Images/slide1.jpg'
import slideTwo from '../../Images/slide2.jpg'
import slideThree from '../../Images/slide3.jpg'
import './Home.css'

const Home = () => {
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
        </div>
    );
};

export default Home;