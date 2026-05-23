import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
// import './AboutUs.css';

const Lesplats = () => (
<div className="app__specialMenu flex__center section__padding" id="lesplats">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">LES PLATS</h1>
    </div>

//////{/* The issue was that the id attribute in the Lesplats component was set to "Lesplats" 
(with a capital 'L'), but the navigation link in the Navbar was pointing to "#lesplats"
 (lowercase 'l'). HTML id attributes are case-sensitive, so the anchor link couldn't find the matching section to scroll to. */}

 
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">BRIYANI</p>
        <div className="app__specialMenu-menu_items">
          {data.BRIYANI.map((BRIYANI, index) => (
            <MenuItem key={index} title={BRIYANI.title} price={BRIYANI.price} tags={BRIYANI.tags} />
          ))}
        </div>
      </div>
        
      <div className="app__specialMenu-menu_img">
        <img src={images.briyani} alt="briyani img" />
        <img src={images.friedRice} alt="friedrice img"/>
      
      </div>
      
      <div className="app__specialMenu-menu_cocktail flex__center">
        <p className="app__specialMenu-menu_heading">FRIED_RICE</p>
        <div className="app__specialMenu-menu_items">
          {data.FRIED_RICE.map((rice, index) => (
            <MenuItem key={index} title={rice.title} price={rice.price} tags={rice.tags} />
          ))}
        </div>
      </div>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">NOUILLES</p>
        <div className="app__specialMenu-menu_items">
          {data.NOUILLES.map((nouille, index) => (
            <MenuItem key={index} title={nouille.title} price={nouille.price} tags={nouille.tags} />
          ))}
        </div>
      </div>

       <div className="app__specialMenu-menu_img">
        <img src={images.nouille} alt="nouille img" />
      
      </div>
       
      <div className="app__specialMenu-menu_cocktail flex__center">
        <p className="app__specialMenu-menu_heading">Traditionnel Sri</p>
        <div className="app__specialMenu-menu_items">
          {data.PLATS_TRADITIONNEL_SRILANKAISE.map((plat, index) => (
            <MenuItem key={index} title={plat.title} price={plat.price} tags={plat.tags} />
          ))}
        </div>
      </div>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">KOTHU</p>
        <div className="app__specialMenu-menu_items">
          {data.KOTHU.map((kothu, index) => (
            <MenuItem key={index} title={kothu.title} price={kothu.price} tags={kothu.tags} />
          ))}
        </div>
      </div>

       <div className="app__specialMenu-menu_img">
        <img src={images.kothu} alt="kothu img" />
      
      </div>
      <div className="app__specialMenu-menu_cocktail flex__center">
        <p className="app__specialMenu-menu_heading">KILLI_PARATTA</p>
        <div className="app__specialMenu-menu_items">
          {data.KILLI_PARATTA.map((killi, index) => (
            <MenuItem key={index} title={killi.title} price={killi.price} tags={killi.tags} />
          ))}
        </div>
      </div>
    </div>
        <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">DOSA</p>
        <div className="app__specialMenu-menu_items">
          {data.DOSA.map((dosa, index) => (
            <MenuItem key={index} title={dosa.title} price={dosa.price} tags={dosa.tags} />
          ))}
        </div>
      </div>

       <div className="app__specialMenu-menu_img">
        <img src={images.dosa} alt="dosa img" />
        <img src={images.masala} alt="masala img" />
      
      </div>
      <div className="app__specialMenu-menu_cocktail flex__center">
        <p className="app__specialMenu-menu_heading">MASALA</p>
        <div className="app__specialMenu-menu_items">
          {data.MASALA.map((masala, index) => (
            <MenuItem key={index} title={masala.title} price={masala.price} tags={masala.tags} />
          ))}
        </div>
      </div>
    </div> 
        <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">TIKKA_MASALA</p>
        <div className="app__specialMenu-menu_items">
          {data.TIKKA_MASALA.map((tikka, index) => (
            <MenuItem key={index} title={tikka.title} price={tikka.price} tags={tikka.tags} />
          ))}
        </div>
      </div>

       <div className="app__specialMenu-menu_img">
        <img src={images.tikkamasala} alt="tikka masala img" />
        <img src={images.kuruma} alt="kuruma img" />
      </div>
      <div className="app__specialMenu-menu_cocktail flex__center">
        <p className="app__specialMenu-menu_heading">KORMA</p>
        <div className="app__specialMenu-menu_items">
          {data.KORMA.map((korma, index) => (
            <MenuItem key={index} title={korma.title} price={korma.price} tags={korma.tags} />
          ))}
        </div>
      </div>
    </div>
            <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">VINDALOO</p>
        <div className="app__specialMenu-menu_items">
          {data.VINDALOO.map((vindaloo, index) => (
            <MenuItem key={index} title={vindaloo.title} price={vindaloo.price} tags={vindaloo.tags} />
          ))}
        </div>
      </div>

       <div className="app__specialMenu-menu_img">
        <img src={images.vindalo} alt="vindalo img" />
        <img src={images.madras} alt="madras img" />
      
      </div>
      <div className="app__specialMenu-menu_cocktail flex__center">
        <p className="app__specialMenu-menu_heading">MADRAS</p>
        <div className="app__specialMenu-menu_items">
          {data.MADRAS.map((madras, index) => (
            <MenuItem key={index} title={madras.title} price={madras.price} tags={madras.tags} />
          ))}
        </div>
      </div>
    </div> 
            <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">KURY</p>
        <div className="app__specialMenu-menu_items">
          {data.KURY.map((kury, index) => (
            <MenuItem key={index} title={kury.title} price={kury.price} tags={kury.tags} />
          ))}
        </div>
      </div>

       <div className="app__specialMenu-menu_img">
        <img src={images.kury} alt="kury img" />
        
      
      </div>
      <div className="app__specialMenu-menu_cocktail flex__center">
        <p className="app__specialMenu-menu_heading">VIANDE_AUX_ÉPINARDS</p>
        <div className="app__specialMenu-menu_items">
          {data.VIANDE_AUX_ÉPINARDS.map((vindaloo, index) => (
            <MenuItem key={index} title={vindaloo.title} price={vindaloo.price} tags={vindaloo.tags} />
          ))}
        </div>
      </div>
    </div> 
            <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">PLATS_VÉGÉTARIENS</p>
        <div className="app__specialMenu-menu_items">
          {data.PLATS_VÉGÉTARIENS.map((plat, index) => (
            <MenuItem key={index} title={plat.title} price={plat.price} tags={plat.tags} />
          ))}
        </div>
      </div>
    </div> 

  
    {/* <div style={{ marginTop: '15px' }}>
      <button type="button" className="custom__button">View More</button>
    </div> */}
    
  </div>

);
export default Lesplats;
