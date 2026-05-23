import React from 'react';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <section className="chef section__padding"id="menu">
    <div className="app__mithusan">
      <h1 className="headtext__cormorant">chinna Veedu Special</h1>
    </div>
    <div className="chef__container">
      <div className="chef__hero">
        <div className="chef__hero-img">
          <img src={images.saval} alt="saval" />
        </div>
        <div className="chef__hero-content">
          <h2 className="chef__title">Saval Saapaadu</h2>
          <p className="chef__subtitle">Riz basmati, legume, fruits de mer, viande</p>
          <ul className="chef__prices">
            <li>Pour 2 personnes <span>35.00 €</span></li>
            <li>Pour 4 personnes <span>55.00 €</span></li>
            <li>Pour 7 personnes <span>85.00 €</span></li>
          </ul>
        </div>
      </div>

      <div className="chef__grid">
        <div className="chef__card">
          <div className="chef__imgwrap">
            <img src={images.mapillaivirunthu} alt="Mapillai Virunthu" />
          </div>
          <h3 className="chef__card-title">Mapillai Virunthu</h3>
          <p className="chef__card-price">80.00 €</p>
        </div>

        <div className="chef__card">
          <div className="chef__imgwrap">
            <img src={images.combat} alt="combat" />
          </div>
          <h3 className="chef__card-title">Combat</h3>
          <p className="chef__card-price"><span>55.00 €</span> / 2 personnes</p>
        </div>

        <div className="chef__card">
          <div className="chef__imgwrap">
            <img src={images.mugilbryani} alt="mugil bryani" />
          </div>
          <h3 className="chef__card-title">Mungil Briyani</h3>
          <p className="chef__card-price">17.00 €</p>
        </div>

        <div className="chef__card">
          <div className="chef__imgwrap">
            <img src={images.meen} alt="meen" />
          </div>
          <h3 className="chef__card-title">MEEN POLICHATHU</h3>
          <p className="chef__card-price">17.00 €</p>
        </div>

        <div className="chef__card">
          <div className="chef__imgwrap">
            <img src={images.kathibryani} alt="kathibryani" />
          </div>
          <h3 className="chef__card-title">Karthi Briyani</h3>
          <p className="chef__card-price">17.00 €</p>
        </div>



        {/* <div className="chef__wide">
          <div className="chef__wide-img">
            <img src={images.meen} alt="meen" />
          </div>
          <div className="chef__wide-content">
            <h3 className="chef__card-title">Meen Polichathu</h3>
            <p className="chef__card-desc">Dorade frite avec sauce Chinna Veedu</p>
            <p className="chef__card-price">13.00 €</p>
          </div>
        </div> */}

        {/* <div className="chef__wide reverse">
          <div className="chef__wide-img">
            <img src={images.kury} alt="kaithi" />
          </div>
          <div className="chef__wide-content">
            <h3 className="chef__card-title">Kaithi Briyani</h3>
            <p className="chef__card-price">60.00 €</p>
            <p className="chef__card-desc">Pour 4 personnes</p>
          </div>
        </div> */}
      </div>
    </div>
  </section>
);

export default Chef;
