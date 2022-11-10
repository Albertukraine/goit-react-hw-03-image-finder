import { Component } from 'react';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';

export class Loader extends Component {
    state = {
        pictures: null,
        page: 1,

      };

     
      onClick = () => {
          this.setState(prevValue => {
            return { page: prevValue.page + 1 };
          });
        };


  componentDidUpdate(prevProps, prevState) {
    if (prevProps.wordToLoad !== this.props.wordToLoad) {
      const word = this.props.wordToLoad;
      const key = '22104578-b37830bb47769ec8fcc7503cc';
      fetch(
        `https://pixabay.com/api/?q=${word}&page=${this.state.page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(res => this.setState({pictures: res.hits})).then(console.log("in loader",this.state))
    }
  }

  render() {
    return <>
    <ImageGallery arrayToRender={this.state.pictures}/>
    <Button onClick={this.onClick}/>
    </>;
  }
}
