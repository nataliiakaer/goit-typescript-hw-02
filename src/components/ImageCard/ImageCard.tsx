import { FC } from "react";
import { CurrentImage, Image } from "../App/App.types";
import css from "./ImageCard.module.css";

type ImageCardProps = {
  image: Image;
  openModal: () => void;
  setCurrentImg: (img: CurrentImage) => void;
};

const ImageCard: FC<ImageCardProps> = ({
  image,
  openModal,
  setCurrentImg,
}: ImageCardProps) => {
  const handleClick = (): void => {
    setCurrentImg({
      url: image.urls.regular,
      alt: image.alt_description || "",
    });
    openModal();
  };

  return (
    <>
      <div className={css.containerImg}>
        <a onClick={handleClick}>
          <img
            className={css.img}
            src={image.urls.small}
            alt={image.alt_description}
          />
        </a>
      </div>
    </>
  );
};

export default ImageCard;
