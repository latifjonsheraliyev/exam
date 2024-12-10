import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const ImageSlider = ({ galleryImages = [], featureImage }) => {
    return (
        <Carousel>
            <div>
                <img src={featureImage} />
            </div>
            {/* < Gallery Images */}
            {
                galleryImages.filter(img => img !== featureImage).map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Gallery Image ${index + 1}`} />
                    </div>
                ))
            }

        </Carousel>
    );
};

export default ImageSlider;