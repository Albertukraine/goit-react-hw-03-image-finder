import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import style from './ImageGallery.module.css';
import { Button } from 'components/Button/Button';

export class ImageGallery extends Component {
  state = {
    pictures: [],
   
  };


  componentDidUpdate(prevProps, prevState) {
   
    console.log("props Image Gallery",this.props);

    if (
      prevProps.wordToLoad !== this.props.wordToLoad ||
      prevProps.page !== this.props.page
    ) {
      const word = this.props.wordToLoad;
      const key = '22104578-b37830bb47769ec8fcc7503cc';
      fetch(
        `https://pixabay.com/api/?q=${word}&page=${this.props.page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(res =>
          this.setState(prevState => ({
            pictures: [...prevState.pictures, ...res.hits],
          }))
        )
        .then(value => {
          console.log(value);
        });
    }
  }

  
  render() {
    return (
      <>
      
        <ul className={style.ImageGallery}>
          <ImageGalleryItem arrayForCard={this.state.pictures} />
        </ul>
        { this.state.pictures.length > 1 && Number.isInteger(this.state.pictures.length/12) && (
          <Button
            onClick={this.props.onClickLoadMore}
            loadMore={this.componentDidUpdate}
          />
        )}
      </>
    );
  }
}
