export const ImageGalleryItem = props => {
  const { arrayForCard } = props;

  if (arrayForCard) {
    console.log('props in card', arrayForCard);
    return (
      <>
        {arrayForCard.map(picture => (
          <li key={picture.id}>
            <img src={picture.webformatURL}></img>
          </li>
        ))}
      </>
    );
  }
};
