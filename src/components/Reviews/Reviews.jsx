import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../shared/services/movies';

import styles from './reviews.module.css'

const Reviews = () => {
  const [reviews, setReviews] = useState({
    reviews: [],
    loading: false,
    error: null
  });
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        setReviews(prevData => ({
          ...prevData,
          loading: true,
        }))
        const { results } = await getMovieReviews(movieId);
        setReviews({
          reviews: [...results],
          loading: false,
          error: null
      });
      } catch (err) {
        setReviews({
          reviews: [],
          loading: false,
          error: err
      })
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  const reviewsList = reviews.reviews.map(review => (
    <li className={styles.item} key={review.id}>
      <p className={styles.text}><span className={styles.textAccent}>Author: </span>{review.author}</p>
      <p className={styles.text}><span className={styles.textAccent}>Comment: </span>{review.content}</p>
    </li>
  ));

  return (
    <>
    {reviews.loading && <p>Идёт поиск</p>}
    {reviews.error && !reviews.loading && <p>Ошибка поиска</p>}
    {Boolean(reviews.reviews.length) && !reviews.loading && !reviews.error ? <ul className={styles.section}>{reviewsList}</ul> : <p className={styles.noReviews}>We don't have any reviews for this movie.</p>}
    </>
  );
};

export default Reviews;
