import style from './Modal.module.css'

export const Modal = props => {
    const {onModalClick, currentPictureURL} = props;

    return <div className={style.Overlay}
    onClick={onModalClick}>
    <div className={style.Modal}>
      <img src={currentPictureURL} alt="" />
    </div>
  </div>
}