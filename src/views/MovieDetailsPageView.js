import { useState, useEffect } from 'react';
import { useParams, useRouteMatch, Route } from 'react-router-dom';
import { fetchMovieDetails } from '../services/movies-api';
import MovieCard from '../components/MovieCard';
import MovieCast from '../components/MovieCast';
import MovieReviews from '../components/MovieReviews';

export default function MovieDetailsPageView() {
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMovieDetails(movieId).then(data => {
      console.log(data);

      setMovie(data);
    });
  }, [movieId]);

  return (
    <>
      {movie && <MovieCard movie={movie} />}

      <Route path={`${url}/cast`}>{movie && <MovieCast id={movieId} />}</Route>

      <Route path={`${url}/reviews`}>
        {movie && <MovieReviews movieId={movieId} />}
      </Route>
    </>
  );
}
