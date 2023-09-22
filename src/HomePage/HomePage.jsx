// import React from 'react'
import "./HomePage.css";
import ImageSlider from "../ImageSlider/ImageSlider";
import { useState } from "react";

function HomePage() {
  const images = [
    "/src/assets/image1.jpg",
    "/src/assets/image2.jpg",
    "/src/assets/image3.jpg",
    "/src/assets/image4.jpg",
  ];
  const products = [
    {
      id: 1,
      name: "Europe",
      imageUrl: "/src/assets/europe.jpg",
    },
    {
      id: 2,
      name: "Delhi",
      imageUrl: "/src/assets/delhi.jpg",
    },
    {
      id: 3,
      name: "Hyderabad",
      imageUrl: "/src/assets/hyderabad.jpg",
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 < products.length ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 2 >= 0 ? prevIndex - 2 : products.length - 2
    );
  };
  return (
    <div className="Home">
      <div className="content">
        <h1>Tailoring Travel</h1>
        <h1 className="sec-line">Adventures Just for You!</h1>
        <p className="para-1">
          Your Ultimate Travel Itinerary Crafting Companion! Build your Next
        </p>
        <p className="para-2">Vacation with AI. Explore More, Plan Less.</p>
        <div className="buttons">
          <button className="explore">Explore More</button>
          <button className="touch">Get In Touch</button>
        </div>
        <h4>Explore Dream Destinations</h4>
        <p className="para-3">
          Create a New Standards Of Personalized Travel Experiences
        </p>

        <div className="product-slider">
          <div className="slider-container">
            <div className="product-slide">
              <div>
              <button className="prev-button" onClick={prevSlide}>
                &lt;
              </button>
              </div>
              
              {products.slice(currentIndex, currentIndex + 2).map((product) => (
                <div key={product.id} className="product-card">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="product-image"
                  />
                  <h2 className="product-name">{product.name}</h2>
                </div>
              ))}
              <div>
              <button className="next-button" onClick={nextSlide}>
                &gt;
              </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div className="images">
        <ImageSlider images={images} />
      </div>
    </div>
  );
}

export default HomePage;