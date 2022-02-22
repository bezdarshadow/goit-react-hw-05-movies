import {Routes, Route} from 'react-router-dom'


import LayoutPage from '../pages/LayoutPage';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';

export const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LayoutPage/>}>
          <Route index element={<HomePage/>} />
          <Route path='movies' element={<MoviesPage />} />
          <Route path='movies/:movieId/' element={<MovieDetailsPage/>} >
            {/* <Route path='cast' element={<MovieDetailsPage/>} />
            <Route path='reviews' element={<MovieDetailsPage/>} /> */}
          </Route>
        </Route>
      </Routes>

    </div>
  );
};
