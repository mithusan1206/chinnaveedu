import React from 'react';
import { images } from '../../constants';

import './Gallery.css';

// const Gallery = () => (
//   <div>
//     Gallery
//   </div>
// );

// export default Gallery;


const Gallery = () => {
  return (
    <div className="menu">
      <div className="menu-container">

        {/* TITLE */}
        <div className="menu-title">COCKTAILS MAISON</div>
        {/* ITEM */}
        <MenuItem
          img={images.gallery01}
          title="ENNA VIDUNGA DAA..."
          desc="Rhum, Vodka, Tequila, Gin, Cachaça, jus d'Ananas, Sirop du Grenadine"
          price="8.90 €"
        />

        <MenuItem
          img={images.gallery02}
          title="EPPUDRA..."
          desc="Vodka, Gin, Gingembre, Jus de Passion"
          price="8.90 €"
        />

        <MenuItem
          img={images.gallery03}
          title="OOO...AAA..."
          desc="Rhum, Jus de Citron, Piment Vert"
          price="8.90 €"
        />

        <MenuItem
          img={images.gallery04}
          title="NEW COCKTAIL"
          desc="Description for new cocktail"
          price="8.90 €"
        />

        {/* SECOND SECTION */}
        <div className="menu-title">APÉRITIFS & DIGESTIFS</div>

        <div className="drinks">
          <div className="drinks-left">
            <p>RICARD (2 cl) 3.50 €</p>
            <p>PASTIS 51 (2 cl) 3.50 €</p>
            <p>GET 27 (6 cl) 4.50 €</p>
            <p>CALVADOS (4 cl) 4.50 €</p>
            <p>KIR VIN BLANC (12 cl) 4.50 €</p>
            <p className="sub">Cassis, Mûre, pêche.</p>
            <p>KIR ROYAL (12 cl) 6.50 €</p>
            <p className="sub">Champagne, Piper</p>
            <p>COGNAC (4 cl) 6.50 €</p>
          </div>

          {/* <div className="drinks-right">
            <p>3.50 €</p>
            <p>3.50 €</p>
            <p>4.50 €</p>
            <p>4.50 €</p>
            <p>4.50 €</p>
            <p>6.50 €</p>
            <p>6.50 €</p>
          </div> */}
        </div>

      </div>
    </div>
  );
}

export default Gallery;

/* COMPONENT */
function MenuItem({ img, title, desc, price }) {
  return (
    <div className="menu-item">
      <div className="item-left">
        <img src={img} alt="cocktail" />
        <div className="item-text">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
      <div className="price">{price}</div>
    </div>
  );
}
