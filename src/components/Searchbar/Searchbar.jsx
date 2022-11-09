import React, { Component } from 'react';
import style from './Searchbar.module.css';

export class SearchBar extends Component {
  state = {
    searchQuery: '',
  };


  handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({
      [name]: value,
    });
    setTimeout(() => console.log('STATE SET TIMEOUT', this.state), 1000);
    console.log(evt.currentTarget.value);
  };


  handleSubmit = evt => {
    evt.preventDefault();
    console.log('handleSubmit', this.state);
    this.props.moveData(this.state.searchQuery);
    // this.props.onSubmitMoveDataToApp(this.state);
    
  };
  

  render() {
    return (
      <header className={style.Searchbar}>
        <form 
        className={style.SearchForm}
        onSubmit={this.handleSubmit}>
          <button 
          type="submit" 
          className={style.SearchFormButton}
          
          >
            <span className={style.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={style.SearchFormInput}
            onChange={this.handleInputChange}
            value={this.state.searchQuery}
            type="text"
            name="searchQuery"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
