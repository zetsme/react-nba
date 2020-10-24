import React, { useState, useEffect, useCallback } from 'react';
import '../styles/TeamEvents.scss';
import { useParams, useHistory } from 'react-router-dom';
import GameScore from '../components/GameScore';
const url = 'https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=';

const TeamEvents = () => {
  const { id } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}${id}`);
      const { results } = await res.json();
      if (results) {
        const newResults = results.map((result) => {
          const {
            strFilename,
            strHomeTeam,
            strAwayTeam,
            intHomeScore,
            intAwayScore,
          } = result;
          return {
            name: strFilename,
            homeTeam: strHomeTeam,
            awayTeam: strAwayTeam,
            homeScore: intHomeScore,
            awayScore: intAwayScore,
          };
        });
        setEvents(newResults);
        setLoading(false);
      } else {
        setEvents([]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [id]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  if (loading) return <h1>Loading....</h1>;
  if (!events) return <h1>No Events Found</h1>;

  return (
    <section className='events'>
      <h1 className='events__heading'>Last five Events</h1>
      <table className='events__list'>
        <thead>
          <tr>
            <th className='events__name'>Event Name</th>
            <th>Home Team</th>
            <th>Home Score</th>
            <th>Away Score</th>
            <th>Away Team</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <GameScore key={index} {...event} />
          ))}
        </tbody>
      </table>
      <button
        className='events__btn btn--blue'
        onClick={() => history.goBack()}
      >
        Go Back
      </button>
    </section>
  );
};

export default TeamEvents;
