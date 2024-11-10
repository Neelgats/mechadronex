import React,{useState} from 'react';
import './Gallery.css';
import galleryImages from './Gallery_data';
import img from './tce.png';


const Gallery=()=>{
    const [selectedImage,setSelectedImage]=useState(null);

    const handleClick=(image)=>{
        setSelectedImage(image);
    };

    const closeLightBox=()=>{
        setSelectedImage(null);
    };

    return(
        <section id='gallery' className='gallery-section'>
            <h2>Gallery</h2>
            <div className='gallery-grid'>
                {galleryImages.map((image,index)=>(
                    <img
                    key={index}
                    src={img}
                    alt={image.alt}
                    className='gallery-item'
                    onClick={()=>handleClick(image.src)}
                    />
                ))}
            </div>

            {selectedImage && (
                <div className='lightbox' onClick={closeLightBox}>
                    <img src={selectedImage} alt='Selected' className='lightbox-image'/>
                </div>
            )}
        </section>
    );
};

export default Gallery;