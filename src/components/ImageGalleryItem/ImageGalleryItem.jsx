import style from './ImageGalleryItem.module.css';


export const ImageGalleryItem = props => {
  const { arrayForCard } = props;

  if (arrayForCard) {
    console.log('props in card', arrayForCard);
    return (
      <>
        {arrayForCard.map(picture => (
          <li className={style.ImageGalleryItem} key={picture.id}>
            <img loading='lazy' className={style.ImageGalleryItemImage} src={picture.webformatURL} alt={picture.tags}></img>
          </li>
        ))}
      </>
    );
  }
};
