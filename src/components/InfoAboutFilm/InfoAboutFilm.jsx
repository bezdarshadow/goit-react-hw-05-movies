import { useEffect, useState } from 'react';
import { getMovieById } from '../../shared/services/films';
import { useParams } from 'react-router-dom';

const InfoAboutFilm = () => {
  const [info, setInfo] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const data = await getMovieById(movieId);
        setInfo(data);
      } catch (err) {}
    };

    fetchInfo();
  }, [movieId]);


//   const genres = info.genres.map(genre => genre.name)
  

  return (
      <>
        <img src={`https://image.tmdb.org/t/p/w500${info.poster_path}`} alt="" />
        <p>{info.title}</p>
        <p>{info.overview}</p>
        
      
      </>
  );
};

export default InfoAboutFilm;
