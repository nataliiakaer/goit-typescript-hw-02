import css from "./ImageGallery.module.css";

import ImageCard from "../ImageCard/ImageCard.tsx";
import { CurrentImage, Image } from "../App/App.types.tsx";
import { FC } from "react";

interface ImageGalleryProps {
  imagesList: Image[];
  openModal: () => void;
  setCurrentImg: (img: CurrentImage) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({
  imagesList,
  openModal,
  setCurrentImg,
}) => {
  return (
    <ul className={css.list}>
      {imagesList.map((image, index) => (
        <li key={`${image.id}-${index}`} className={css.item}>
          <ImageCard
            image={image}
            openModal={openModal}
            setCurrentImg={setCurrentImg}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
