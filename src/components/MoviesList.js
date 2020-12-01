import React from 'react';
import PropTypes from 'prop-types';
import { Movie } from './Movie';

export const MoviesList = ({ movies, handleAdd }) => (
  <ul className="MoviseList">
    { movies.map(movie => (
      <li
        className="MoviesItem"
        key={movie.imdbId}
      >
        <Movie {...movie} handleAdd={handleAdd} />
      </li>
    ))}
  </ul>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imdbId: PropTypes.string.isRequired,
    imdbUrl: PropTypes.string.isRequired,
  })).isRequired,
  handleAdd: PropTypes.func.isRequired,
};
