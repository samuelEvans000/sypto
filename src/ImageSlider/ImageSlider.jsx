/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./ImageSlider.css"; // Create a CSS file for styling

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 2-second interval

    return () => clearInterval(interval);
  }, [images]);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="image-slider">
      <div className="slider-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slider-image ${index === currentImageIndex ? "active" : ""}`}
          >
            <img src={image} alt={`Image ${index}`} style={{width:"100%", height:"500px", objectFit:"contain"}} />
          </div>
        ))}
      </div>
      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={`dot-${index}`} // Use a unique key for each dot
            className={`dot ${index === currentImageIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
