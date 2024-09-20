import css from "./ImageGallery.module.css";

import ImageCard from "../ImageCard/ImageCard.tsx";

type Props = {
  images: [];
  openModal: () => void;
  setCurrentImg: () => void;
};

const ImageGallery = ({ images, openModal, setCurrentImg }: Props) => {
  return (
    <ul className={css.list}>
      {images.map((image) => {
        return (
          <li key={image.id} className={css.item}>
            <ImageCard
              image={image}
              openModal={openModal}
              setCurrentImg={setCurrentImg}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
