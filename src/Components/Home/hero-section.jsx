import React from 'react';
import './../../styles/style.css';
import './../../styles/global-styles.css';
import brightnessIcon from '../../Assets/icons/edit-brightness.svg';
import Heroimage from '../../Assets/images/308-03.png';

function HeroSection() {
  return (
    <section className='hero-bg'>
      <div className="container">
        <div className="row">
          <div className="col-6 col-12">
            <div className='bg-voilet'>
               <img src={brightnessIcon} alt="brightness Icon" />
              <p>released</p>
              <a href="">Learn More</a>
            </div>
            <div className='hero-title'>
              <h1>Your data with real-time analytics</h1>
            </div>
            <div className='hero-para'>
              <p>Harness the potential of Big Data Analytics & Cloud Services and become a data-driven organization with Needle tail</p>
            </div>
            <div>
              <button className='cta-primary mr-2'>Start Free Trial</button>
              <button className='cta-secondary'>Learn More</button>
            </div>
          </div>
          <div className="col-6 col-12">
            <div className='text-center'>
              <img src={Heroimage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
