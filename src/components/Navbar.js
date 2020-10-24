import '../styles/Navbar.scss';
import React from 'react';
import { Link } from 'react-router-dom';
const url =
  'https://www.thesportsdb.com/images/media/league/badge/frdjqy1536585083.png';

const Navbar = () => {
  return (
    <nav className='nav'>
      <img className='nav__image' src={url} alt='' />
      <Link className='nav__link' to='/stats'>
        Season Stats
      </Link>
    </nav>
  );
};

export default Navbar;
