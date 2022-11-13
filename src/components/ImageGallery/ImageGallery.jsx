import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import style from './ImageGallery.module.css';

export const ImageGallery = props => {
  // console.log(props);

  const { picturesArray } = props;

  return (
    <>
      <ul className={style.ImageGallery}>
        <ImageGalleryItem arrayForCard={picturesArray} />
      </ul>
    </>
  );
};
