import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getMoviesBySearch } from '../../shared/services/movies';
import MoviesSearchForm from './MoviesSearchForm';
import MoviesSearchList from './MoviesSearchList';

const MoviesSearch = () => {
  const [data, setData] = useState({
    films: [],
    loading: false,
    error: null
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query');

  const location = useLocation()

  useEffect(() => {
    if (!searchQuery) {
      return
    }
    const fetchMovies = async () => {
      try {
        setData({
          ...data,
          loading: true,
        })
        const { results } = await getMoviesBySearch(searchQuery);
        setData({
          films: [...results],
          loading: false,
          error: null,
        });
      } catch (err) {
        setData({
          films: [],
          loading: false,
          error: err
        })
      }
    };

    fetchMovies();
  }, [searchQuery]);

  const handleSubmit = useCallback(query => setSearchParams({ query, page: 1 }), []);

  return (
    <>
      <MoviesSearchForm onSubmit={handleSubmit} />
      {data.loading && <p>Идёт поиск</p>}
      {data.error && !data.loading && <p>Ошибка поиска</p>}
      {searchQuery && Boolean(data.films.length) && !data.loading && <MoviesSearchList movies={data.films} location={location}/>}
      {searchQuery && !Boolean(data.films.length) && !data.loading && !data.error && <p>По запросу {searchQuery} ничего не найдено</p>}
    </>
  );
};

export default MoviesSearch;
