import React from 'react';
import PropTypes from 'prop-types';
import '../pages/styles.module.css';

function Button({ children, dataTestid, className, onClick, disabled }) {
  return (
    <div className="buttons">
      <button
        type="button"
        data-testid={ dataTestid }
        className={ className }
        onClick={ onClick }
        disabled={ disabled }
      >
        { children }
      </button>
    </div>

  );
}

Button.defaultProps = {
  dataTestid: '',
  className: '',
  disabled: false,
  onClick: () => {},
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  dataTestid: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
