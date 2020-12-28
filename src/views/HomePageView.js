import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../services/movies-api';
import MovieList from '../components/MovieList/MovieList';
// import Loader from '../Components/Loader';
import ErrorView from './ErrorView';

export default function HomeView() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    fetchTrendingMovies()
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  return (
    <>
      <MovieList movies={movies} title="Trending today" />
    </>
  );
}
