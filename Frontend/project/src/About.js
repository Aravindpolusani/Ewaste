import React from "react";
import { Carousel } from 'react-bootstrap';
import About2 from './Images/About2.jpg';
import first from './Images/first1.jpg';
import fourth from './Images/fourth.jpg';
import third from './Images/third.jpg';
import './About.css';

function About(){
        return(
        <div className="aboutpage"> 
       <blink> <h1>About us</h1> </blink>
            
        <Carousel>
           <Carousel.Item>
                <img src= { first }/>
            <Carousel.Caption>
            <div className="txt">
                <h3 >Leading the Way in E-Waste Management</h3>
                <p >At Trash Treasure Trove, we are dedicated to 
                  revolutionizing the approach to electronic waste (e-waste) management. 
                  As a leading platform for buying and selling e-waste products, 
                  we strive to create a sustainable ecosystem where responsible disposal 
                  practices meet the growing demand for refurbished electronics.</p>
            </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
                <img src={ About2}/>
          <Carousel.Caption>
          <div className="txt">
          <h3 >Our Mission</h3>
          <p >Our mission is to mitigate the environmental impact of e-waste by providing 
            individuals and businesses with a convenient and ethical solution for disposing 
            of their electronic devices. We aim to promote the circular economy by extending 
            the lifespan of electronics through reuse and recycling.</p>
          </div>
          </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
                <img src={ third}/>
          <Carousel.Caption>
          <div className="txt" style={{fontSize:'x-small'}}>
          <h3 >What Sets Us Apart</h3>
          <ul>
            <li>Comprehensive Platform: Our platform offers a seamless experience for users to buy and 
              sell e-waste products, with features designed to ensure transparency and security throughout 
              the process.</li>
            <li>Environmental Commitment: We are committed to minimizing the environmental impact of 
              e-waste disposal by promoting responsible recycling practices and advocating for sustainable 
              consumption habits.</li>
            <li>Customer-Centric Approach: Our dedicated customer support team is here to assist users 
              every step of the way, from listing their products to completing transactions and resolving 
              any issues that may arise.</li>
          </ul>
          </div>
          </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
                <img src={ fourth}/>
          <Carousel.Caption>
          <div className="txt">
          <h3 >Join Us</h3>
          <p >Whether you're looking to dispose of your old electronics responsibly or find high-quality 
            refurbished devices at affordable prices, Trash Treasure Trove is here to serve your needs. 
            Together, we can make a positive impact on the environment and create a more sustainable future 
            for generations to come. Join us in our mission to redefine e-waste management for the better.</p>
          </div>
          </Carousel.Caption>
      </Carousel.Item>
          
    </Carousel>
    </div>
  );
};

export default About;