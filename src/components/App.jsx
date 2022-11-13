import React, { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import style from './App.module.css';
import { Button } from 'components/Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    pictures: [],
    loading: false,
    modalIsShow: false,
    currentPictureURL: null,
  };

  onImageClick = evt => {
    this.setState({ modalIsShow: true });
    this.setState({ currentPictureURL: evt });
  };

  onModalClick = evt => {
    this.setState({ modalIsShow: false });
  };

  onClickLoadMore = () => {
    this.setState(prevValue => {
      return { page: prevValue.page + 1 };
    });
  };

  onSubmitMoveDataToApp = evt => {
    this.setState({ searchQuery: evt, page: 1 });
    // setTimeout(
    //   () => console.log('what we have on app state', this.state),
    //   1000
    // );
  };

  componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ pictures: [] });
    }

    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      const word = this.state.searchQuery;
      const key = '22104578-b37830bb47769ec8fcc7503cc';
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${word}&page=${this.state.page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(res =>
          this.setState(prevState => ({
            pictures: [...prevState.pictures, ...res.hits],
          }))
        )
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    return (
      <div className={style.App}>
        <SearchBar moveData={this.onSubmitMoveDataToApp} />

        <ImageGallery
          onImageClick={this.onImageClick}
          onClickLoadMore={this.onClickLoadMore}
          picturesArray={this.state.pictures}
        />

        {this.state.pictures.length > 1 &&
          Number.isInteger(this.state.pictures.length / 12) && (
            <Button onClick={this.onClickLoadMore} />
          )}
        <Loader isLoading={this.state.loading} />
        {this.state.modalIsShow && (
          <Modal
            currentPictureURL={this.state.currentPictureURL}
            onModalClick={this.onModalClick}
          />
        )}
      </div>
    );
  }
}
