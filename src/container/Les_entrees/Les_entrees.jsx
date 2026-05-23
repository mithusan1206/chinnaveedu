import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
// import './SpecialMenu.css';

const Lesentrees = () => (
<div className="app__specialMenu flex__center section__padding" id="lesentrees">
    {/* <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div> */}

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">les entrées</p>
        <div className="app__specialMenu-menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

       <div className="app__specialMenu-menu_img">
        <img src={images.samosa} alt="samosa img" />
        <img src={images.poulet} alt="poulet img" />
        
      
      </div>
      <div className="app__specialMenu-menu_cocktail flex__center">
        <p className="app__specialMenu-menu_heading">les Tandooris</p>
        <div className="app__specialMenu-menu_items">
          {data.lesentréeTandoori.map((tandoori, index) => (
            <MenuItem key={index} title={tandoori.title} price={tandoori.price} tags={tandoori.tags} />
          ))}
        </div>
      </div>
    </div> 
    {/* <div style={{ marginTop: '15px' }}>
      <button type="button" className="custom__button">View More</button>
    </div> */}
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">les devil</p>
        <div className="app__specialMenu-menu_items">
          {data.lesdevil.map((devil, index) => (
            <MenuItem key={index} title={devil.title} price={devil.price} tags={devil.tags} />
          ))}
        </div>
      </div>

       <div className="app__specialMenu-menu_img">
        <img src={images.devil} alt="devil img" />
        <img src={images.pain} alt="pain img" />
      
      </div>
      <div className="app__specialMenu-menu_cocktail flex__center">
        <p className="app__specialMenu-menu_heading">les Pains indiens</p>
        <div className="app__specialMenu-menu_items">
          {data.LES_PAINS_INDIENS.map((pain, index) => (
            <MenuItem key={index} title={pain.title} price={pain.price} tags={pain.tags} />
          ))}
        </div>
      </div>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">les soupe</p>
        <div className="app__specialMenu-menu_items">
          {data.SOUPE.map((soupe, index) => (
            <MenuItem key={index} title={soupe.title} price={soupe.price} tags={soupe.tags} />
          ))}
        </div>
      </div>

        <div className="app__specialMenu-menu_img">       
      </div>
      <div className="app__specialMenu-menu_cocktail flex__center">
        <p className="app__specialMenu-menu_heading">Riz parfumé</p>
        <div className="app__specialMenu-menu_items">
          {data.RIZ_PARFUMES.map((riz, index) => (
            <MenuItem key={index} title={riz.title} price={riz.price} tags={riz.tags} />
          ))}
        </div>
      </div>
    </div> 
  </div>
);

export default Lesentrees;


// <div className="WHAT EVER THE FUCKING NAME" id="Lesentrees">
