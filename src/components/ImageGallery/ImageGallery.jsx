import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import style from './ImageGallery.module.css';
import { Button } from 'components/Button/Button';

export class ImageGallery extends Component {
  state = {
    pictures: [],
    page: 1,
  };



  onClickLoadMore = () => {
    this.setState(prevValue => {
      return { page: prevValue.page + 1 };
    });
  };

//   onSubmitNewQuery = () => { if (this.props.clearPreventGallery === true) {
//     this.setState({ pictures: [], page: 1 })
//   };
//   };



  componentDidUpdate(prevProps, prevState) {
    console.log(Number.isInteger(this.state.pictures.length/12));
// this.onSubmitNewQuery();
    if (
      prevProps.wordToLoad !== this.props.wordToLoad ||
      prevState.page !== this.state.page
    ) {
      const word = this.props.wordToLoad;
      const key = '22104578-b37830bb47769ec8fcc7503cc';
      fetch(
        `https://pixabay.com/api/?q=${word}&page=${this.state.page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
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
            onClick={this.onClickLoadMore}
            loadMore={this.componentDidUpdate}
          />
        )}
      </>
    );
  }
}
