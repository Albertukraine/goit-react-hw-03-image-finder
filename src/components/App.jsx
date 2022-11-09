import React, { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';





export class App extends Component {
  state = {
searchQuery: '',
  };

  onSubmitMoveDataToApp = evt => {
    this.setState({searchQuery: evt});
    console.log("what we have on app state", this.state)
  };

  render(){

    return(
      <SearchBar moveData={this.onSubmitMoveDataToApp}/>

    )
  }
}