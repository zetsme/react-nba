import React, { useCallback, useEffect, useState } from 'react';
import '../styles/TeamDetails.scss';
import { useParams, useHistory, Link } from 'react-router-dom';
const url = 'https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=';

const TeamDetails = () => {
  const history = useHistory();
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}${id}`);
      const { teams } = await res.json();
      if (teams) {
        const {
          idTeam: teamId,
          strTeam: name,
          intFormedYear: formYear,
          strStadium: stadiumName,
          strStadiumThumb: stadiumImage,
          strStadiumLocation: stadiumLocation,
          intStadiumCapacity: stadiumCapacity,
          strWebsite: website,
          strDescriptionEN: description,
          strTeamBadge: badge,
        } = teams[0];
        const teamDetails = {
          teamId,
          name,
          formYear,
          stadiumName,
          stadiumImage,
          stadiumLocation,
          stadiumCapacity,
          website,
          description,
          badge,
        };
        setDetails(teamDetails);
        setLoading(false);
      } else {
        setDetails(null);
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

  if (loading) return <h1>Loading ....</h1>;
  if (!details) return <h1>No Details to display</h1>;
  const {
    teamId,
    name,
    formYear,
    stadiumName,
    stadiumImage,
    stadiumLocation,
    stadiumCapacity,
    website,
    description,
    badge,
  } = details;
  return (
    <section className='details'>
      <div className='details__info'>
        <img className='details__logo' src={badge} alt='' />
        <div className='details__content'>
          <h1>{name}</h1>
          <p>{formYear || 'some'}</p>
          <p>{stadiumName}</p>
          <p>{stadiumLocation}</p>
          <p>Stadium Capacity : {stadiumCapacity}</p>
          <Link className='details__btn btn--blue' to={`/events/${teamId}`}>
            Last five games
          </Link>
          <button
            className=' details__btn btn--red'
            onClick={() => history.goBack()}
          >
            Go Back
          </button>
        </div>
      </div>

      <div>
        <img src={stadiumImage} alt={stadiumName} />
      </div>
      <div className='details__description'>
        <p>{description}</p>
        <a href={website}>{website}</a>
      </div>
    </section>
  );
};

export default TeamDetails;
