import React from 'react';
import './Cocktails.css';

const Cocktails = () => (
  <section className="findus">
    <div className="findus__wrapper">
      <div className="findus__menu">
        <span className="findus__label p__cormorant">COCKTAILS</span>

        <div className="findus__section">
          <h2 className="findus__section-heading p__cormorant">JUS DE FRUIT FRAIS PRESSÉ (AU CHOIX)</h2>
          <ul className="findus__list">
            <li className="findus__item">
              <div>
                <div className="findus__item-title p__cormorant">1 fruit au choix</div>
                <div className="findus__item-desc p__cormorant">Pomme, orange, carrot, cucumber, ananas, ginger</div>
              </div>
              <span className="findus__item-price p__cormorant">5.90 €</span>
            </li>
            <li className="findus__item">
              <div>
                <div className="findus__item-title p__cormorant">Multi fruit deux choix</div>
              </div>
              <span className="findus__item-price p__cormorant">6.90 €</span>
            </li>
          </ul>
        </div>

        <div className="findus__section">
          <h2 className="findus__section-heading p__cormorant">COCKTAILS SANS ALCOOL</h2>
          <ul className="findus__list">
            <li className="findus__item">
              <div>
                <div className="findus__item-title p__cormorant">VIRGIN APPLE MOJITO</div>
                <div className="findus__item-desc p__cormorant">Jus de Pomme, Citron Vert, Menthe Fraiche</div>
              </div>
              <span className="findus__item-price p__cormorant">5.90 €</span>
            </li>
            <li className="findus__item">
              <div>
                <div className="findus__item-title p__cormorant">VIRGIN MOJITO</div>
                <div className="findus__item-desc p__cormorant">(Classic, Mangue, Passion, Fraise) Citron Vert, Menthe Fraiche, Cassonade, Limonade</div>
              </div>
              <span className="findus__item-price p__cormorant">5.90 €</span>
            </li>
            <li className="findus__item">
              <div>
                <div className="findus__item-title p__cormorant">BORA BORA</div>
                <div className="findus__item-desc p__cormorant">Jus de Mangue, Jus d'Ananas, Jus de Citron, Sirop de Grenadine</div>
              </div>
              <span className="findus__item-price p__cormorant">5.90 €</span>
            </li>
            <li className="findus__item">
              <div>
                <div className="findus__item-title p__cormorant">VIRGIN PINA COLADA</div>
                <div className="findus__item-desc p__cormorant">Crème de Coco, Jus d'Ananas</div>
              </div>
              <span className="findus__item-price p__cormorant">5.90 €</span>
            </li>
            <li className="findus__item">
              <div>
                <div className="findus__item-title p__cormorant">VIRGIN BLACK MOJITO</div>
                <div className="findus__item-desc p__cormorant">Coca Cola, Citron Vert, Menthe Fraiche</div>
              </div>
              <span className="findus__item-price p__cormorant">6.90 €</span>
            </li>
          </ul>
        </div>

        <div className="findus__section">
          <h2 className="findus__section-heading p__cormorant">CLASSIQUES (ALCOOL)</h2>
          <ul className="findus__list">
            <li className="findus__item">
              <div>
                <div className="findus__item-title p__cormorant">MOJITOS AU CHOIX</div>
                <div className="findus__item-desc p__cormorant">Classique, Fraise, Framboise, Passion, Black Mojito</div>
              </div>
              <span className="findus__item-price p__cormorant">8.90 €</span>
            </li>
            <li className="findus__item">
              <div>
                <div className="findus__item-title p__cormorant">PINA COLADA</div>
                <div className="findus__item-desc p__cormorant">Rhum Blanc, Rhum Brun, Crème de Coco, Jus d'Ananas</div>
              </div>
              <span className="findus__item-price p__cormorant">8.90 €</span>
            </li>
            <li className="findus__item">
              <div>
                <div className="findus__item-title p__cormorant">SEX ON THE CHINNA VEEDU</div>
                <div className="findus__item-desc p__cormorant">Vodka, Liqueur de Pêche, Jus d'Orange, Jus de Cranberry</div>
              </div>
              <span className="findus__item-price p__cormorant">8.90 €</span>
            </li>
            <li className="findus__item">
              <div>
                <div className="findus__item-title p__cormorant">SPRITZ</div>
                <div className="findus__item-desc p__cormorant">Aperol, Prosecco, Orange (Tranche)</div>
              </div>
              <span className="findus__item-price p__cormorant">8.90 €</span>
            </li>
            <li className="findus__item">
              <div>
                <div className="findus__item-title p__cormorant">COSMOPOLITAN</div>
                <div className="findus__item-desc p__cormorant">Vodka, Cointreau, Jus de Citron, Jus de Cranberry</div>
              </div>
              <span className="findus__item-price p__cormorant">8.90 €</span>
            </li>
          </ul>
        </div>
      </div>

      <aside className="findus__aside">
        <div className="findus__callout">
          <div className="findus__callout-title p__cormorant">Enna Da Ithu..!</div>
          <div className="findus__callout-price p__cormorant">6.90 €</div>
          <p className="findus__callout-desc p__cormorant">Passion, Mangue, Coco</p>
        </div>
      </aside>
    </div>
  </section>
);

export default Cocktails;
