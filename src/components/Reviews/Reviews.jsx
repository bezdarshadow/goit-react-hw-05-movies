import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../shared/services/movies';

import styles from './reviews.module.css'

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const { results } = await getMovieReviews(movieId);
        setReviews(results);
      } catch (err) {}
    };

    fetchMovieReviews();
  }, [movieId]);

  const reviewsList = reviews.map(review => (
    <li className={styles.item} key={review.id}>
      <p className={styles.text}><span className={styles.textAccent}>Author: </span>{review.author}</p>
      <p className={styles.text}><span className={styles.textAccent}>Comment: </span>{review.content}</p>
    </li>
  ));

  return (
    <>
      {Boolean(reviews.length) ? <ul className={styles.section}>{reviewsList}</ul> : <p className={styles.noReviews}>We don't have any reviews for this movie.</p>}
    </>
  );
};

export default Reviews;
