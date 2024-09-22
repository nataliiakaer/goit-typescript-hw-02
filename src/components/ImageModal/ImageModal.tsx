import { useEffect, FC } from "react";
import css from "./ImageModal.module.css";
import { CurrentImage } from "../App/App.types";

interface InputProps {
  currentImage: CurrentImage;
  closeModal: () => void;
}

const ImageModal: FC<InputProps> = ({ currentImage, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.code === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  const handleBackDropClick = (
    event: React.MouseEvent<HTMLDivElement>
  ): void => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={css.backdrop} onClick={handleBackDropClick}>
      <div className={css.modal}>
        <img src={currentImage.url} alt={currentImage.alt} />
      </div>
    </div>
  );
};

export default ImageModal;
