// import Modal from "react-modal";
import { useEffect } from "react";
import css from "./ImageModal.module.css";

const ImageModal = ({ currentImg, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  const handleBackDropClick = (event) => {
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
