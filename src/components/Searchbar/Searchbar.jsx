import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import s from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
  const [movieName, setMovieName] = useState('');

  const handleChange = e => {
    setMovieName(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (movieName.trim() === '') {
      toast('Please enter search query');
      return;
    }

    onSubmit(movieName);

    setMovieName('');
  };

  return (
    <div className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          value={movieName}
          onChange={handleChange}
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search film"
        />
      </form>
    </div>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
