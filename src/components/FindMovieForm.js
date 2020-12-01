import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { findMovie } from './api';

export const FindMovieForm = ({ handleAdd }) => {
  const [currMovie, setCurrMovie] = useState(null);
  const [searchQueryMovie, setSearchQueryMovie] = useState(null);

  async function handleFind() {
    const searchedMovie = await findMovie(searchQueryMovie);

    setCurrMovie(searchedMovie);
  }

  return (
    <form className="FindMovieForm">
      <input onChange={event => setSearchQueryMovie(event.target.value)} />
      <button
        type="button"
        onClick={() => handleFind()}
      >
        Find Movie
      </button>
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          handleAdd(currMovie);
        }}
      >
        Add Movie
      </button>
    </form>
  );
};

FindMovieForm.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};
