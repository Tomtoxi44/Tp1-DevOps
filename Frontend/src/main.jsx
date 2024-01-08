import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import App from './App.jsx';
import './index.css';

function CarouselApp() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'chemin/vers/image1.jpg',
    'chemin/vers/image2.jpg',
    'chemin/vers/image3.jpg',
    // Ajoutez autant d'images que nécessaire
  ];

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <Carousel selectedItem={currentIndex} onChange={setCurrentIndex}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      <button onClick={prevImage}>Précédent</button>
      <button onClick={nextImage}>Suivant</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CarouselApp />
    </BrowserRouter>
  </React.StrictMode>,
);
