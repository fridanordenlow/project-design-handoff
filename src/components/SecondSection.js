import React from 'react';

import card1 from '../assets/card-barre-basic.svg';

const SecondSection = () => {
  return (
    <section className="second-section-container">
      <div className="join-us-container">
        <p className="join-us-paragraph">Join our full-body workout inspired by ballet, pilates and yoga.</p>
        <button className="primary-button" type="button">Join Us!</button>
      </div>
      <div className="second-section-image-container">
        <img src="src/assets/barre-with-rubber-bands.png" alt="barre with rubber bands" className="second-section-image" />
      </div>
      <div className="come-sweat-container">
        <h1 className="h1-second-section">Come Sweat It Out at the Barre</h1>
        <p className="second-section-paragraph">
        Our barre classes are full-body workouts where we&apos;ll pulse, plié, and sweat
        our way through a series of exercises.
          <br />
          <span className="span-bolder">No dance experience required!</span>
        </p>
        <button className="our-classes-button" type="button">Our Classes</button>
      </div>
      <div className="barre-card-container">
        <img src={card1} alt="barre basic information" className="barre-card-basic" />
      </div>
    </section>
  );
}

export default SecondSection;

// eslint-disable-next-line max-len
// <img className="second-section-image" src="/assets/barre-with-rubber-bands.png" alt="barre with rubber bands" />