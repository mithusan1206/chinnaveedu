import React from 'react';
import './Alcohol.css';

const Alcohol = () => (
  <section className="intro section__padding" id="alcohol">
    <div className="intro__container">
          <h1 className="headtext__cormorant p__cormorant">Alcohol</h1>
      <div className="intro__menu">
        <div className="intro__col intro__col-left">

          <h2 className="intro__heading p__cormorant">WHISKY</h2>
          <ul className="intro__list">
            <li><span className="p__cormorant">JB (4 cl)</span><span className="price p__cormorant">3.50 €</span></li>
            <li><span className="p__cormorant">GRANT\'S (4 cl)</span><span className="price p__cormorant">3.50 €</span></li>
            <li><span className="p__cormorant">Jack Daniel\'s (6 cl)</span><span className="price p__cormorant">5.50 €</span></li>
            <li><span className="p__cormorant">Chivas (4 cl)</span><span className="price p__cormorant">5.50 €</span></li>
            <li><span className="p__cormorant">BLACK LABEL (4 cl)</span><span className="price p__cormorant">5.50 €</span></li>
          </ul>

          <h2 className="intro__heading p__cormorant">VODKA</h2>
          <ul className="intro__list">
            <li><span className="p__cormorant">SMIRNOFF (4 cl)</span><span className="price p__cormorant">3.50 €</span></li>
            <li><span className="p__cormorant">Absolut (4 cl)</span><span className="price p__cormorant">4.50 €</span></li>
            <li><span className="p__cormorant">GREYGOOSE (4 cl)</span><span className="price p__cormorant">6.50 €</span></li>
            <li><span className="p__cormorant">BELVEDERE (4 cl)</span><span className="price p__cormorant">6.50 €</span></li>
          </ul>
        </div>

        <div className="intro__col intro__col-right">
          <h2 className="intro__heading p__cormorant">GIN</h2>
          <ul className="intro__list">
            <li><span className="p__cormorant">GIBSON\'S LONDON DRY (4 cl)</span><span className="price p__cormorant">4.50 €</span></li>
            <li><span className="p__cormorant">BOMBAY SAPPHIRE (4 cl)</span><span className="price p__cormorant">5.50 €</span></li>
          </ul>

          <h2 className="intro__heading p__cormorant">TEQUILA</h2>
          <ul className="intro__list">
            <li><span className="p__cormorant">CAMINO REAL (4 cl)</span><span className="price p__cormorant">3.50 €</span></li>
            <li><span className="p__cormorant">PATRON SILVER (4 cl)</span><span className="price p__cormorant">10.00 €</span></li>
          </ul>

        </div>
      </div>
    </div>

    <div className="intro__container">
          <h1 className="headtext__cormorant p__cormorant">CARTE des vins</h1>
      <div className="intro__menu">
        <div className="intro__col intro__col-left">

          <h2 className="intro__heading p__cormorant">VINS ROUGES</h2>
          <ul className="intro__list">
            <li><span className="p__cormorant">VIN ROUGE (75 cl)</span><span className="price p__cormorant">3.50 €</span></li>
            <li><span className="p__cormorant">GRANT\'S (4 cl)</span><span className="price p__cormorant">3.50 €</span></li>
            <li><span className="p__cormorant">Jack Daniel\'s (6 cl)</span><span className="price p__cormorant">5.50 €</span></li>
            <li><span className="p__cormorant">Chivas (4 cl)</span><span className="price p__cormorant">5.50 €</span></li>
            <li><span className="p__cormorant">BLACK LABEL (4 cl)</span><span className="price p__cormorant">5.50 €</span></li>
          </ul>

          <h2 className="intro__heading p__cormorant">VINS ROSÉS</h2>
          <ul className="intro__list">
            <li><span className="p__cormorant">SMIRNOFF (4 cl)</span><span className="price p__cormorant">3.50 €</span></li>
            <li><span className="p__cormorant">Absolut (4 cl)</span><span className="price p__cormorant">4.50 €</span></li>
            <li><span className="p__cormorant">GREYGOOSE (4 cl)</span><span className="price p__cormorant">6.50 €</span></li>
            <li><span className="p__cormorant">BELVEDERE (4 cl)</span><span className="price p__cormorant">6.50 €</span></li>
          </ul>
        </div>

        <div className="intro__col intro__col-right">
          <h2 className="intro__heading p__cormorant">GIN</h2>
          <ul className="intro__list">
            <li><span className="p__cormorant">GIBSON\'S LONDON DRY (4 cl)</span><span className="price p__cormorant">4.50 €</span></li>
            <li><span className="p__cormorant">BOMBAY SAPPHIRE (4 cl)</span><span className="price p__cormorant">5.50 €</span></li>
          </ul>

          <h2 className="intro__heading p__cormorant">TEQUILA</h2>
          <ul className="intro__list">
            <li><span className="p__cormorant">CAMINO REAL (4 cl)</span><span className="price p__cormorant">3.50 €</span></li>
            <li><span className="p__cormorant">PATRON SILVER (4 cl)</span><span className="price p__cormorant">10.00 €</span></li>
          </ul>

        </div>
      </div>
    </div>
  </section>
);

export default Alcohol;

