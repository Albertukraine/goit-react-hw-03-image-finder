import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import style from './ImageGallery.module.css';

export const ImageGallery = props => {
    const {arrayToRender} = props;
    // console.log("!!!!!",arrayToRender.map(item => item.id));
    const arrayForCard = arrayToRender;
   
    return  <ul className={style.ImageGallery}> 
   <ImageGalleryItem arrayForCard={arrayForCard} />
</ul>

}