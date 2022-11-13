import style from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = props => {
  //   console.log('BUTTON PROPS', props);
  return (
    <button className={style.Button} type="button" onClick={props.onClick}>
      LOAD MORE
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
