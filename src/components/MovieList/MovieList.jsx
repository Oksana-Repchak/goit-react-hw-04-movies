import { Link, useRouteMatch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import s from './MovieList.module.css';
import imagePlaceholder from '../../images/imagePlaceholder.png';

function MovieList({ movies, title }) {
  const { url } = useRouteMatch();

  return (
    <div className={s.wrapper}>
      <h2>{title}</h2>
      <ul className={s.list}>
        {movies.map(movie => {
          return (
            <li key={movie.id} className={s.item}>
              <Link to={`${url}movies/${movie.id}`} className={s.link}>
                <img
                  className={s.image}
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : imagePlaceholder
                  }
                  alt={movie.title}
                />
                <p className={s.title}>{movie.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};
