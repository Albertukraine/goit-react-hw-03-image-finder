import { Component } from 'react';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';

export class Loader extends Component {
  state = {
    pictures: [],
    page: 1,
    status: 'pending',
  };

  onClick = () => {
    this.setState(prevValue => {
      return { page: prevValue.page + 1 };
    });
  };

  componentDidUpdate(prevProps, prevState) {
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
        <ImageGallery
          page={this.state.page}
          arrayToRender={this.state.pictures}
        />
        {this.state.pictures.length > 1 && (
          <Button onClick={this.onClick} loadMore={this.componentDidUpdate} />
        )}
      </>
    );
  }
}
