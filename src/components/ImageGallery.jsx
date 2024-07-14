import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-56 lg:w-96 overflow-hidden">
      <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black bg-gray-100 opacity-50 px-1 z-10 text-2xl">
        ‹
      </button>
      <div className="relative">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Product Image ${index + 1}`} className="w-full flex-shrink-0" />
          ))}
        </div>
      </div>
      <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 opacity-50 text-black text-2xl px-1 z-10">
        ›
      </button>
    </div>
  );
};

export default ImageGallery;
