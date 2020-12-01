import React from 'react';
import PropTypes from 'prop-types';

export const Movie = ({ Title, Plot, imdbID, Poster }) => (
  <div className="Movie">
    <img
      alt="poste"
      src={Poster}
    />
    <div>{Title}</div>
    <p>{Plot}</p>
    <div>{imdbID}</div>
  </div>
);

Movie.propTypes = {
  Title: PropTypes.string.isRequired,
  Plot: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired,
};
