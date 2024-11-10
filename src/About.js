import React from "react";
import './About.css';

const About=()=>{
    return(
        <section id="about" className="about-section">
                <h2>About Us</h2>
                <div className="about-content">
                    <div className="who">
                        <h3>Who we are</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation
                             ullamco laboris nisi ut aliquip ex ea commodo 
                             consequat. Duis aute irure dolor in reprehenderit 
                             in voluptate velit esse cillum dolore eu fugiat 
                             nulla pariatur. Excepteur sint occaecat cupidatat 
                             non proident, sunt in culpa qui officia deserunt 
                             mollit anim id est laborum.</p>
                    </div>
                    <div className="what">
                        <h3>What we do</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                             elit, sed do eiusmod tempor incididunt ut labore 
                             et dolore magna aliqua. Ut enim ad minim veniam, 
                             quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure 
                              dolor in reprehenderit in voluptate velit esse 
                              cillum dolore eu fugiat nulla pariatur. 
                              Excepteur sint occaecat cupidatat non proident,
                               sunt in culpa qui officia deserunt mollit 
                               anim id est laborum.</p>
                    </div>
                </div>
        </section>
    );
}

export default About;