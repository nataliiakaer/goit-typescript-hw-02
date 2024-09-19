import css from "./ImageCard.module.css";

const ImageCard = ({ image, openModal, setCurrentImg }) => {
  
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
