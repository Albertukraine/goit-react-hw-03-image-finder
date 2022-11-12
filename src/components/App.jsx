import React, { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import style from './App.module.css';

export class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    
    
  };

  onClickLoadMore = () => {
    
    this.setState(prevValue => {
      return { page: prevValue.page + 1 };
    });
  };

  // componentDidMount() {
  //   fetch(
  //     'https://pixabay.com/api/?q=cat&page=1&key=22104578-b37830bb47769ec8fcc7503cc&image_type=photo&orientation=horizontal&per_page=12'
  //   )
  //     .then(res => res.json())
  //     .then(res => this.setState({pictures: res}));
  // }

  onSubmitMoveDataToApp = evt => {
    this.setState({ searchQuery: evt, page: 1 });
    setTimeout(
      () => console.log('what we have on app state', this.state),
      1000
    );
  };

  render() {
    return (
      <div className={style.App}>
        <SearchBar moveData={this.onSubmitMoveDataToApp}/>
        <ImageGallery onClickLoadMore={this.onClickLoadMore} wordToLoad={this.state.searchQuery} page={this.state.page} />
      </div>
    );
  }
}
