import React from 'react';
import './Intro.css';
import { images } from '../../constants';

const Intro = () => (
  <section className="intro section__padding" id="intro">
    <div className="intro__container">
          <h1 className="headtext__cormorant">alchool</h1>
      <div className="intro__menu">
        <div className="intro__col intro__col-left">

          <h2 className="intro__heading">WHISKY</h2>
          <ul className="intro__list">
            <li><span>JB (4 cl)</span><span className="price">3.50 €</span></li>
            <li><span>GRANT\'S (4 cl)</span><span className="price">3.50 €</span></li>
            <li><span>Jack Daniel\'s (6 cl)</span><span className="price">5.50 €</span></li>
            <li><span>Chivas (4 cl)</span><span className="price">5.50 €</span></li>
            <li><span>BLACK LABEL (4 cl)</span><span className="price">5.50 €</span></li>
          </ul>

          <h2 className="intro__heading">VODKA</h2>
          <ul className="intro__list">
            <li><span>SMIRNOFF (4 cl)</span><span className="price">3.50 €</span></li>
            <li><span>Absolut (4 cl)</span><span className="price">4.50 €</span></li>
            <li><span>GREYGOOSE (4 cl)</span><span className="price">6.50 €</span></li>
            <li><span>BELVEDERE (4 cl)</span><span className="price">6.50 €</span></li>
          </ul>
        </div>

        <div className="intro__col intro__col-right">
          <h2 className="intro__heading">GIN</h2>
          <ul className="intro__list">
            <li><span>GIBSON\'S LONDON DRY (4 cl)</span><span className="price">4.50 €</span></li>
            <li><span>BOMBAY SAPPHIRE (4 cl)</span><span className="price">5.50 €</span></li>
          </ul>

          <h2 className="intro__heading">TEQUILA</h2>
          <ul className="intro__list">
            <li><span>CAMINO REAL (4 cl)</span><span className="price">3.50 €</span></li>
            <li><span>PATRON SILVER (4 cl)</span><span className="price">10.00 €</span></li>
          </ul>

          <div className="intro__imagewrap">
            <img src={images.alcholcollection} alt="alcholcollection" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Intro;
