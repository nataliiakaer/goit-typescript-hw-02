import css from "./ImageCard.module.css";

type Props = {
  image: [];
  openModal: () => void;
  setCurrentImg: ({ url: string, alt: string }) => void;
};

const ImageCard = ({ image, openModal, setCurrentImg }: Props) => {
  const handleClick = () => {
    setCurrentImg({ url: image.urls.regular, alt: image.alt_description });
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
