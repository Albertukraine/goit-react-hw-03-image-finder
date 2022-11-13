import style from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = props => {
  const { arrayForCard, onImageClick } = props;

  if (arrayForCard) {
    console.log('props in card', arrayForCard);
    return (
      <>
        {arrayForCard.map(picture => (
          <li className={style.ImageGalleryItem} key={picture.id}>
            <img
              loading="lazy"
              className={style.ImageGalleryItemImage}
              src={picture.webformatURL}
              alt={picture.tags}
              onClick={onImageClick}
            ></img>
          </li>
        ))}
      </>
    );
  }
};

ImageGalleryItem.propTypes = {
  arrayForCard: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
