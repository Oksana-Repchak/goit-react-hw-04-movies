import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './Button.module.css';

export default function Button({ route }) {
  const label = 'Back';

  const navRoute = route ? route : '/';

  return (
    <button type="button" className={s.Button}>
      <Link to={navRoute}>{label}</Link>
    </button>
  );
}

Button.propTypes = {
  route: PropTypes.string,
};
