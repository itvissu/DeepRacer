import React, { useState, useEffect } from "react";
import "../components/imageslider.css"; // CSS for the ImageSlider component

const Imageslider = ({ images, intervalTime = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to update the current image index
  const updateImageIndex = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Use useEffect to start the interval when the component mounts
  useEffect(() => {
    const interval = setInterval(updateImageIndex, intervalTime);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-slider">
      <div
        className="slider-content"
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`,
        }}
      >
        {images.map((imageUrl, index) => (
          <div className="slider-item" key={index}>
            <img src={imageUrl} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Imageslider;
