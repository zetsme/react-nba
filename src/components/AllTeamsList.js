import React, { useEffect, useState, useCallback } from 'react';
import '../styles/AllTeamList.scss';
import Team from './Team';
const url =
  'https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4387';
const AllTeamsList = () => {
  const [loading, setLoading] = useState(false);
  const [teamsData, setTeamsData] = useState([]);
  const fetchTeamData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const { teams } = await res.json();
      if (teams) {
        const newTeams = teams.map((team) => {
          const { idTeam, strTeam, strTeamBadge } = team;
          return { id: idTeam, name: strTeam, image: strTeamBadge };
        });
        setTeamsData(newTeams);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchTeamData();
  }, [fetchTeamData]);
  if (loading) {
    return <h1>Loading .....</h1>;
  }
  return (
    <ul className='teams-list-grid'>
      {teamsData.map((item, index) => (
        <Team key={index} {...item} />
      ))}
    </ul>
  );
};

export default AllTeamsList;
