import React from 'react';
import '../styles/Team.scss';
import { Link } from 'react-router-dom';

const Team = ({ name, id, image }) => {
  return (
    <li className='team'>
      <img className='team__image' src={image} alt={name} />
      <h2 className='team__name'>{name}</h2>
      <div className='team__links'>
        <Link className='team__link btn--red' to={`/details/${id}`}>
          Team Details
        </Link>
        <Link className='team__link btn--blue' to={`/events/${id}`}>
          Last five games
        </Link>
      </div>
    </li>
  );
};

export default Team;
