import { useState, useEffect } from 'react';
import { useParams, useRouteMatch, useLocation, Route } from 'react-router-dom';
import { fetchMovieDetails } from '../services/movies-api';
import MovieCard from '../components/MovieCard';
import MovieCast from '../components/MovieCast';
import MovieReviews from '../components/MovieReviews';
import Button from '../components/Button';

export default function MovieDetailsPageView() {
  const { path } = useRouteMatch();
  const { movieId } = useParams();
  const [movies, setMovies] = useState({});
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetails(movieId).then(data => {
      setMovies(data);
    });
  }, [movieId]);

  return (
    <>
      <Button route={location.state} />

      {movies && <MovieCard movie={movies} />}

      <Route path={`${path}:movieId/cast`}>
        {movies && <MovieCast id={movieId} />}
      </Route>

      <Route path={`${path}:movieId/reviews`}>
        {movies && <MovieReviews id={movieId} />}
      </Route>
    </>
  );
}
