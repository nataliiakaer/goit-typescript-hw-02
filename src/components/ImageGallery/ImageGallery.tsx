import css from "./ImageGallery.module.css";

import ImageCard from "../ImageCard/ImageCard.tsx";

const ImageGallery = ({ images, openModal, setCurrentImg }) => {
  return (
    <ul className={css.list}>
      {images.map((image) => {
        return (
          <li key={image.id} className={css.item}>
            <ImageCard image={image} openModal={openModal} setCurrentImg={setCurrentImg}/>
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
