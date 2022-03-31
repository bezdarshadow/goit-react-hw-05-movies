import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../shared/services/movies';

import styles from './cast.module.css'

const Cast = () => {
  const [cast, setCast] = useState({
    cast: [],
    loading: false,
    error: null
  });
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        setCast(prevData => ({
          ...prevData,
          loading: true,
        }))
        const { cast } = await getMovieCast(movieId);
        setCast({
          cast: [...cast],
          loading: false,
          error: null
        })
      } catch (err) {
        setCast({
          cast: [],
          loading: false,
          error: err
        })
      }
    };

    fetchMovieCast()
  }, [movieId]);

  const castList = cast.cast.map(actor => (
    <li className={styles.item} key={actor.id}>
        <img className={styles.itemImage} src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : 'https://picsum.photos/200/300'} alt="" />
        <p className={styles.text}>{actor.name}</p>
        <p className={styles.text}>{actor.character}</p>
    </li>
))

  return <>
  {cast.loading && <p>Идёт поиск</p>}
  {cast.error && !cast.loading && <p>Ошибка поиска</p>}
  {!cast.loading && !cast.error && <ul className={styles.gallery}>
      {castList}
  </ul>}
  </>;
};

export default Cast;
