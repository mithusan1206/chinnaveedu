import React from 'react';
import '../Alcohol/Alcohol.css';
import { boisson } from '../../constants';

const Boissons = () => {
  const sodas = boisson.filter((item) => item.description.toLowerCase().includes('sodas'));
  const minerals = boisson.filter((item) => item.description.toLowerCase().includes('eaux'));

  return (
    <section className="intro section__padding" id="boissons">
      <div className="intro__container">
        <h1 className="headtext__cormorant p__cormorant">Boissons fraîches</h1>
        <div className="intro__menu">
          <div className="intro__col intro__col-left">
            <h2 className="intro__heading p__cormorant">Sodas</h2>
            <ul className="intro__list">
              {sodas.map((item, index) => (
                <li key={`soda-${index}`}>
                  <span className="p__cormorant">{item.name}</span>
                  <span className="price p__cormorant">{item.price}</span>
                </li>
              ))}
            </ul>

            <h2 className="intro__heading p__cormorant">Eaux minérales</h2>
            <ul className="intro__list">
              {minerals.map((item, index) => (
                <li key={`eau-${index}`}>
                  <span className="p__cormorant">{item.name}</span>
                  <span className="price p__cormorant">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boissons;
