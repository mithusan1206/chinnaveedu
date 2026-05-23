import React from 'react';
import { Navbar } from '../../components';
import './Reservation.css';

const Reservation = () => (
  <div>
    <Navbar />
    <div className="app__reservation section__padding" id="reservation">
      <div className="app__reservation-content">
        <h1 className="headtext__cormorant">Make a Reservation</h1>
        <p className="p__opensans">Book your table now for an unforgettable dining experience.</p>
        {/* Add reservation form or details here */}
      </div>
    </div>
  </div>
);

export default Reservation;
