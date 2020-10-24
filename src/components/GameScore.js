import React from 'react';
import '../styles/GameScore.scss';

const GameScore = ({ name, homeTeam, awayTeam, homeScore, awayScore }) => {
  const home = () => {
    return parseInt(homeScore) > parseInt(awayScore)
      ? 'events__win'
      : 'events__loss';
  };
  const away = () => {
    return parseInt(awayScore) > parseInt(homeScore)
      ? 'events__win'
      : 'events__loss';
  };
  return (
    <tr>
      <td className='events__name'>{name}</td>
      <td>{homeTeam}</td>
      <td className={`${home()} events__score`}>{homeScore}</td>
      <td className={`${away()} events__score`}>{awayScore}</td>
      <td>{awayTeam}</td>
    </tr>
  );
};

export default GameScore;
