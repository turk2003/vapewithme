import React, { useState, useEffect } from 'react';
const Slider = () => {
    const images = [
      'https://via.placeholder.com/1200x400/09f/fff.png?text=Image+1',
      'https://via.placeholder.com/1200x400/f90/fff.png?text=Image+2',
      'https://via.placeholder.com/1200x400/3c3/fff.png?text=Image+3',
    ];
  
    const [currentImage, setCurrentImage] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentImage(currentImage => (currentImage + 1) % images.length);
      }, 3000);
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div className="slider">
        <img src={images[currentImage]} alt="Slider Image" />
      </div>
    );
  }
  
  export default Slider;