import React from 'react';

const TeamStat = ({ name, win, loss }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{win}</td>
      <td>{loss}</td>
    </tr>
  );
};

export default TeamStat;
