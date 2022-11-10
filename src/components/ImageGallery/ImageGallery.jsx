import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = props => {
    const {arrayToRender} = props;
    // console.log("!!!!!",arrayToRender.map(item => item.id));
    const arrayForCard = arrayToRender;
   
    return  <ul className='Gallery'> 
   <ImageGalleryItem arrayForCard={arrayForCard} />
</ul>

}