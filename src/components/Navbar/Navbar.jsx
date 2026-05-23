import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  <nav className={`app__navbar ${isScrolled ? 'app__navbar--scrolled' : ''}`}>
    <div className="app__navbar-logo"> <img src={images.gericht} alt="app logo" /> </div>
    <ul className="app__navbar-links">
      <li className="p__opensans"><Link to="/#home">Home</Link></li>
      <li className="p__opensans"><Link to="/#lesentrees">les entrées</Link></li>
      <li className="p__opensans"><Link to="/#lesplats">les plats</Link></li>
      <li className="p__opensans"><Link to="/#menu">Special Menu</Link></li>
      <li className="p__opensans"><Link to="/#Aboire">A boire</Link></li>
      <li className="p__opensans"><Link to="/#lesdesserts">les desserts</Link></li>
      <li className="p__opensans"><Link to="/#contact">Contact</Link></li>
      ////////{/* <li className="p__opensans"><a href="#ID must be same to support div section to direct"> abcd text </a></li> */}
    </ul>
        <div className="app__navbar-login">
      <a href="#login" className="p__opensans">Log In / Registration</a>
      <Link to="/reservation" className="p__opensans">Book Table</Link>
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbarsmallscreen_links">
                <li className="p__opensans"><Link to="/#home">Home</Link></li>
                  <li className="p__opensans"><Link to="/#lesentrees">les entrées</Link></li>
                  <li className="p__opensans"><Link to="/#lesplats">les plats</Link></li>
                  <li className="p__opensans"><Link to="/#menu">Special Menu🔥</Link></li>
                  <li className="p__opensans"><Link to="/#Aboire">A boire🍸</Link></li>
                  <li className="p__opensans"><Link to="/#lesdesserts">les desserts</Link></li>
                  <li className="p__opensans"><Link to="/#contact">Contact</Link></li>
                  <li className="p__opensans"><Link to="/reservation">Reservation</Link></li>
            </ul>
          </div>
        )}


    </div>
  </nav>
  )
}
export default Navbar;
