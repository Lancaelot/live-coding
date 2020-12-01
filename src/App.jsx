import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { FindMovieForm } from './components/FindMovieForm';

export const App = () => {
  const [movies, setMovies] = useState([]);

  const handleAdd = (currMovie) => {
    setMovies([...movies, currMovie]);
  };

  return (
    <div>
      <FindMovieForm handleAdd={handleAdd} />
      <MoviesList movies={movies} />
    </div>
  );
};
