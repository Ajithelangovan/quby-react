import React from 'react';
import './../../styles/style.css';
import './../../styles/global-styles.css';
import eyeIcon from '../../Assets/icons/Icon awesome-eye.svg';
import Heroimage from '../../Assets/images/308-03.png';

function ServicesSection() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
          <div className='bg-voilet text-center'>
               <img src={eyeIcon} alt="eye Icon" />
              <p>Why Quby</p>
            </div>
          </div>
          <div className="col-6 col-12">

          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
