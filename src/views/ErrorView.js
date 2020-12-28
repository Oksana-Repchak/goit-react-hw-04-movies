import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorView({ title }) {
  const defaultTitle = 'Sorry, something went wrong';

  return (
    <>
      <p style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '700' }}>
        {title || defaultTitle}
      </p>
    </>
  );
}

ErrorView.propTypes = {
  title: PropTypes.string,
};
