import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import card1 from '../assets/card-barre-basic.svg';
import card2 from '../assets/card-barre-strong.svg';
import card3 from '../assets/card-barre-flex.svg';
import card4 from '../assets/card-barre-dance.svg';

const cards = [card1, card2, card3, card4] // Create an array of imports

const ImageCarousel = () => {
  const sliderRef = useRef(null)

  const handleNextClick = () => {
    sliderRef.current.slickNext()
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  }

  return (
    <div>
      <Slider settings={settings} ref={sliderRef}>
        {cards.map((card) => (
          <div>
            <img src={card.default} alt="barre card" />
          </div>
        ))}
      </Slider>
      <button type="button" onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default ImageCarousel;