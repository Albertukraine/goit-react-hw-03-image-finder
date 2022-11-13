import style from './Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = props => {
  const { onModalClick, currentPictureURL } = props;

  return (
    <div className={style.Overlay} onClick={onModalClick}>
      <div className={style.Modal}>
        <img src={currentPictureURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onModalClick: PropTypes.func.isRequired,
  currentPictureURL: PropTypes.string.isRequired,
};
