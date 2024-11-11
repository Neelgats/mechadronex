import React, { useEffect, useRef } from 'react';
import './Gallery.css';
import img1 from './BALAJI_R.png';
import img2 from './JASWANTH.jpg';
import img3 from './HARIPRASAD.jpg';

const galleryData = [
    { src: img1, alt: 'Image 1', details: 'Description for Image 1' },
    { src: img2, alt: 'Image 2', details: 'Description for Image 2' },
    { src: img3, alt: 'Image 3', details: 'Description for Image 3' },
];

const Gallery = () => {
    const slideshowRef = useRef(null);

    useEffect(() => {
        const wrapper = slideshowRef.current;
        let scrollAmount = 0;
        const speed = 1; // Adjust this value for faster or slower scrolling

        const scroll = () => {
            scrollAmount += speed;
            if (scrollAmount >= wrapper.scrollWidth / 2) {
                scrollAmount = 0;
            }
            wrapper.scrollTo({
                left: scrollAmount,
                behavior: 'smooth',
            });
        };

        const interval = setInterval(scroll, 20);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="gallery-section">
            <div className="slideshow-wrapper" ref={slideshowRef}>
                {galleryData.map((image, index) => (
                    <div key={index} className="slide">
                        <img src={image.src} alt={image.alt} />
                        <div className="slide-details">{image.details}</div>
                    </div>
                ))}
                {/* Clone the images for smooth infinite scroll */}
                {galleryData.map((image, index) => (
                    <div key={`${index}-clone`} className="slide">
                        <img src={image.src} alt={image.alt} />
                        <div className="slide-details">{image.details}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
