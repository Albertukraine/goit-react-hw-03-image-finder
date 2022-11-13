import style from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = props => {
  const { arrayForCard, onImageClick } = props;

  if (arrayForCard) {
    // console.log('props in card', props);
    return (
      <>
        {arrayForCard.map(picture => (
          <li
            className={style.ImageGalleryItem}
            key={picture.id}
            href={picture.largeImageURL}
          >
            <img
              loading="lazy"
              className={style.ImageGalleryItemImage}
              src={picture.webformatURL}
              alt={picture.tags}
              onClick={() => onImageClick(picture.largeImageURL)}
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
