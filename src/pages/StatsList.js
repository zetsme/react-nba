import React from 'react';
import '../styles/StatsList.scss';
import { Link } from 'react-router-dom';
import TeamStat from '../components/TeamStat';
import { useFetch } from '../hooks';

const StatsList = () => {
  const { loading, data } = useFetch(
    'https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4387&s=2019-2020'
  );
  if (loading) return <h1>Loading ......</h1>;
  if (!data) return <h1>No Data</h1>;
  const { table } = data;
  if (table) {
    return (
      <div className='stats'>
        <h1 className='stats__heading'>Stats</h1>
        <table className='stats__table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Win</th>
              <th>Loss</th>
            </tr>
          </thead>
          <tbody>
            {table.map((item, index) => (
              <TeamStat key={index} {...item} />
            ))}
          </tbody>
        </table>
        <Link className='stats__link btn--blue' to='/'>
          Home
        </Link>
      </div>
    );
  }
  return null;
};

export default StatsList;
