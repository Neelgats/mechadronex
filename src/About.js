import React from "react";
import './About.css';
import bg from './inaugural_photo.jpg';

const About=()=>{
    return(
        <section id="about" className="about-section">
                <h2>About Us</h2>
                <div className="about-content">
                    <div className="who">
                        <h3>Who we are</h3>
                        <p>We are a passionate team of students, innovators, and tech enthusiasts
                             united by a shared love for drones. At <strong><em>MechaDroneX</em></strong>, we explore the 
                             limitless possibilities of drone technology, constantly learning, 
                             experimenting, and pushing the envelope. Our members come from diverse 
                             backgrounds but share a common goal: to leverage drones for real-world 
                             solutions, make technology more accessible, and inspire others to join 
                             us on this exciting journey..</p>
                    </div>

                   <section className="image-card">
                    <div className="image-container">
                        <img src={bg} alt="Landscape" className="landscape-image" />
                        <div className="glass-effect"></div>
                    </div>
                    </section>

                    <div className="what">
                        <h3>What we do</h3>
                        <p>At MechaDroneX, our mission is to inspire and empower 
                            the next generation of drone enthusiasts. We are dedicated 
                            to providing hands-on learning experiences, fostering creativity,
                             and encouraging innovation in drone technology. By building a 
                             strong, collaborative community, we aim to push the boundaries 
                             of what drones can achieve, shaping a future where they play a 
                             vital role in technology, exploration, and problem-solving.</p>
                    </div>
                </div>
        </section>
    );
}

export default About;