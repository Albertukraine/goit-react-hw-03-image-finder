import React, { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';



export class App extends Component {
  state = {
    searchQuery: '',
  };

  // componentDidMount() {
  //   fetch(
  //     'https://pixabay.com/api/?q=cat&page=1&key=22104578-b37830bb47769ec8fcc7503cc&image_type=photo&orientation=horizontal&per_page=12'
  //   )
  //     .then(res => res.json())
  //     .then(res => this.setState({pictures: res}));
  // }

  onSubmitMoveDataToApp = evt => { 
    this.setState({ searchQuery: evt });
    setTimeout(
      () => console.log('what we have on app state', this.state),
      1000
    );
  };

  render() {
    return (<>
    <SearchBar moveData={this.onSubmitMoveDataToApp} />
    <Loader wordToLoad={this.state.searchQuery} didMount={this.componentDidMount}/>
    </>
    ) 
    
    
  }
}
