import './Style.scss';
import React from 'react';
import PropTypes from 'prop-types';

export default function SuggestBtn({ onClick }) {
  return (
    <button className="suggestBtn" type="button" onClick={onClick}>Another Suggestion</button>
  );
}
SuggestBtn.propTypes = {
  onClick: PropTypes.func,
};
SuggestBtn.defaultProps = {
  onClick: false,
};
