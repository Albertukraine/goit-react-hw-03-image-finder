import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import style from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export const ImageGallery = props => {
  // console.log(props);

  const { picturesArray, onImageClick } = props;

  return (
    <>
      <ul className={style.ImageGallery}>
        <ImageGalleryItem
          arrayForCard={picturesArray}
          onImageClick={onImageClick}
        />
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  picturesArray: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
