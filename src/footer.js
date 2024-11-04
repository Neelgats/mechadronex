import React from "react";
import './Footer.css';

const Footer=()=>{
    return(
        <footer className="footer">
            <div className="social_media">
                <a href="https://www.instagram.com">Instagram</a>
                <a href="https://www.twitter.com">Twitter</a>
                <a href="https://www.linkedin.com">LinkedIn</a>
            </div>
            <div className="location">
                <p>Our Location</p>
            </div>
        </footer>
    );
}

export default Footer;