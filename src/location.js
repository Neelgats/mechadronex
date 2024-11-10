import React from "react";
import './location.css';

const Location=()=>{
    return (
        <section id="location" className="location-section">
          <h2>Our Location</h2>
          <div className="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.6209668942433!2d78.08155289999999!3d9.882132100000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c58f98cfb84d%3A0x29f51efea3e84bf2!2sThiagarajar%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1731172614556!5m2!1sen!2sin" 
          width="100%"
           height="300"
           style={{border:'0'}}
            allowfullscreen="" 
            loading="lazy"
             title="Google Map">
          </iframe>
          </div>
        </section>
      );
};

export default Location;