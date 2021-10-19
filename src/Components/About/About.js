import React from 'react';
import banner from '../../Images/about.jpg'
import './About.css'
const About = () => {
    return (
        <div>
            <section>
                
                <div>
                    <img className="w-100 banner" src={banner} alt="" />
                </div>
                <div className="w-75 mx-auto my-5">
                    <h3>The Kardio Klub.</h3>
                    <p>No matter what you’re looking for in a gym, we’ve got a membership option made for you. Kardio Klub members enjoy unlimited access to their home club and the support of our friendly, knowledgeable staff anytime you need it. 

                    Looking for a little extra guidance or inspiration to help you meet your fitness goals? As a member, you can take advantage of our free fitness training or find your motivation by reading real member experiences on Planet of Triumphs.
                    It’s our goal to provide a clean, safe, welcoming environment for anyone who walks through our door, and all the equipment, amenities and support you need once you’re here.</p>
                </div>
            </section>
        </div>
    );
};

export default About;