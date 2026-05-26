import React from 'react';
import '../Alcohol/Alcohol.css';
import { images, bier } from '../../constants';

const Bieres = () => {
  const pressionBeers = bier.filter((item) => item.description.toLowerCase().includes('pression'));
  const bottleBeers = bier.filter((item) => item.description.toLowerCase().includes('bouteille'));

  return (
    <section className="intro section__padding" id="bieres">
      <div className="intro__container">
        <h1 className="headtext__cormorant p__cormorant">Carte des Bières</h1>
        <div className="intro__menu">
          <div className="intro__col intro__col-left">
            <h2 className="intro__heading p__cormorant">Bières pression</h2>
            <ul className="intro__list">
              {pressionBeers.map((item, index) => (
                <li key={`p-${index}`} className={item.name === 'KALLU கள்ளு' ? 'intro__list-item intro__list-item--kalu' : 'intro__list-item'}>
                  <span className="p__cormorant">{item.name}</span>
                  {item.name === 'KALLU கள்ளு' && (
                    <span
                      className="intro__list-kalu-bg"
                      style={{ backgroundImage: `url(${images.kalu})` }}
                      aria-hidden="true"
                    />
                  )}
                  <span className="price p__cormorant">{item.price}</span>
                </li>
              ))}
            </ul>

            <h2 className="intro__heading p__cormorant">Bières bouteille</h2>
            <ul className="intro__list">
              {bottleBeers.map((item, index) => (
                <li key={`b-${index}`} className={item.name === 'KALLU கள்ளு' ? 'intro__list-item intro__list-item--kalu' : 'intro__list-item'}>
                  <span className="p__cormorant">{item.name}</span>
                  {item.name === 'KALLU கள்ளு' && (
                    <span
                      className="intro__list-kalu-bg"
                      style={{ backgroundImage: `url(${images.kalu})` }}
                      aria-hidden="true"
                    />
                  )}
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

export default Bieres;
