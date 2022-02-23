import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getMoviesBySearch } from '../../shared/services/movies';
import MoviesSearchForm from './MoviesSearchForm';
import MoviesSearchList from './MoviesSearchList';

const MoviesSearch = () => {
  const [data, setData] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query');

  const location = useLocation()

  useEffect(() => {
    if (!searchQuery) {
      return
    }
    const fetchMovies = async () => {
      try {
        const { results } = await getMoviesBySearch(searchQuery);
        setData(results);
      } catch (err) {}
    };

    fetchMovies();
  }, [searchQuery]);

  const handleSubmit = query => setSearchParams({ query, page: 1 });

  return (
    <>
      <MoviesSearchForm onSubmit={handleSubmit} />
      {searchQuery && Boolean(data.length) && <MoviesSearchList movies={data} location={location}/>}
      {searchQuery && !Boolean(data.length) && <p>По запросу {searchQuery} ничего не найдено</p>}
    </>
  );
};

export default MoviesSearch;
