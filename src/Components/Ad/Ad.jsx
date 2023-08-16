import React, { useEffect, useState } from "react";
import { close, olxSlider } from "../../Assests";
import "./ad.css"


function Ad({images, startFromIndex }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(startFromIndex);

    // Function to update the current image index
    const updateImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        // Set up a timer to update the image every 30 seconds
        const interval = setInterval(() => {
            updateImage();
        }, 30000); // 30000 milliseconds = 30 seconds

        // Clean up the timer when the component unmounts or changes the image source
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="ad">
            <div className="ad-inner">
                <div className="ad-slider">
                    <img className="ad-img" src={images[currentImageIndex]}alt="" />
                    <button><img src={close} alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default Ad