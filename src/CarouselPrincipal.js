import React, { useState, useEffect } from 'react';
import CarouselImg1 from './images/carousel/carouselimg1.jpg';
import CarouselImg2 from './images/carousel/carouselimg2.jpg';
import CarouselImg3 from './images/carousel/carouselimg3.jpg';

const CarouselPrincipal = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const nextSlide = () => {
    const nextIndex = (activeIndex + 1) % 3;
    setActiveIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = activeIndex === 0 ? 2 : activeIndex - 1;
    setActiveIndex(prevIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div id="controleCarrosel" className="carousel slide" data-bs-ride="carousel" style={{marginTop:'88px'}}>
      <div className="carousel-inner">
        <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
          <img className="d-block w-100" style={{objectFit: 'cover', height: '600px'}} src={CarouselImg1} />
        </div>
        <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
          <img className="d-block w-100" style={{objectFit: 'cover', height: '600px'}} src={CarouselImg2} />
        </div>
        <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
          <img className="d-block w-100" style={{objectFit: 'cover', height: '600px'}} src={CarouselImg3} />
        </div>
      </div>
      <a className="carousel-control-prev" href="#controleCarrosel" role="button" data-slide="prev" onClick={prevSlide}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only"></span>
      </a>
      <a className="carousel-control-next" href="#controleCarrosel" role="button" data-slide="next" onClick={nextSlide}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only"></span>
      </a>
    </div>
  );
}

export default CarouselPrincipal;