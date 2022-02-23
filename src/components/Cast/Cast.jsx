import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../shared/services/movies';

import styles from './cast.module.css'

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const { cast } = await getMovieCast(movieId);
        setCast(cast)
      } catch (err) {}
    };

    fetchMovieCast()
  }, [movieId]);

  const castList = cast.map(actor => (
    <li className={styles.item} key={actor.id}>
        <img className={styles.itemImage} src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : 'https://picsum.photos/200/300'} alt="" />
        <p className={styles.text}>{actor.name}</p>
        <p className={styles.text}>{actor.character}</p>
    </li>
))

  return <>
  <ul className={styles.gallery}>
      {castList}
  </ul>
  </>;
};

export default Cast;
