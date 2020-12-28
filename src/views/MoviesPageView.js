import { useState } from 'react';
import Searchbar from '../components/Searchbar/Searchbar';

export default function MoviesPageView() {
  const [filmName, setFilmName] = useState('');
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);

  function onChangeQuery(filmName) {
    setFilmName(filmName);
    setFilms([]);
    setError(null);
  }
  return (
    <>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      <Searchbar onSubmit={onChangeQuery} />{' '}
    </>
  );
}
