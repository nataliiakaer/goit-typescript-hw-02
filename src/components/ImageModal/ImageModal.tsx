// import Modal from "react-modal";
import { KeyboardEvent, MouseEventHandler, MouseEvent, useEffect } from "react";
import css from "./ImageModal.module.css";

type InputProps = {
  currentImg: { url: string; alt: string };
  closeModal: () => void;
};

const ImageModal = ({ currentImg, closeModal }: InputProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.code === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  const handleBackDropClick = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={css.backdrop} onClick={handleBackDropClick}>
      <div className={css.modal}>
        <img src={currentImg.url} alt={currentImg.alt} />
      </div>
    </div>
  );
};

export default ImageModal;
