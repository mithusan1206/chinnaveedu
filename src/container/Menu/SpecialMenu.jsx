import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import '../shared/SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding">
    {/* <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">chinna Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Chinna Veedu SPECIAL</p>
        <div className="app__specialMenu-menu_items">
          {data.SPECIAL.map((SPECIAL, index) => (
            <MenuItem key={index} title={SPECIAL.title} price={SPECIAL.price} tags={SPECIAL.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.saval} alt="saval img" />
      </div>

      <div className="app__specialMenu-menu_cocktail flex__center">
        <p className="app__specialMenu-menu_heading">Dessert Special</p>
        <div className="app__specialMenu-menu_items">
          {data.SPECIAL.map((SPECIAL, index) => (
            <MenuItem key={index} title={SPECIAL.title} price={SPECIAL.price} tags={SPECIAL.tags} />
          ))}
        </div>
      </div>
    </div> */}
    {/* <div style={{ marginTop: '15px' }}>
      <button type="button" className="custom__button">View More</button>
    </div> */}
  </div>
);

export default SpecialMenu;
