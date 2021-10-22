import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => (
  <nav>
    <Link to="/weather"> Погода </Link>
  </nav>
);

export default WelcomePage;
