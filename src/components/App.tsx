import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery.tsx";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn.tsx";
import SearchBar from "./SearchBar/SearchBar.tsx";
import Loader from "./Loader/Loader.tsx";
import ErrorMessage from "./ErrorMessage/ErrorMessage.tsx";
import { fetchImagesWithSearchValue } from "../images_api.ts";
import css from "./App.module.css";
import ImageModal from "./ImageModal/ImageModal.tsx";

const App = () => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchValue, setSearchValue] = useState(null);
  const [loadMore, setLoadMore] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [currentImg, setCurrentImg] = useState({});

  const openModal = (regular) => {
    setModalIsOpen(true);
    console.log(regular);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onSearch = (event) => {
    setSearchValue(event);
    setImages([]);
    setLoadMore(1);
  };

  const getMoreImages = () => {
    if (loading) return;
    setLoadMore(loadMore + 1);
  };

  useEffect(() => {
    if (!searchValue) return;

    async function fetchImage() {
      try {
        setLoading(true);
        const data = await fetchImagesWithSearchValue(searchValue, loadMore);
        setImages((prevData) => [...prevData, ...data.results]);
        setShowBtn(data.total_pages && data.total_pages != loadMore);
        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchImage();
  }, [searchValue, loadMore]);

  return (
    <>
      <SearchBar onSearch={onSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {Array.isArray(images) && images.length > 0 && (
        <ImageGallery
          images={images}
          openModal={openModal}
          setCurrentImg={setCurrentImg}
        />
      )}
      {showBtn && images.length > 0 && (
        <LoadMoreBtn getMoreImages={getMoreImages} />
      )}
      {Array.isArray(images) && images.length === 0 && (
        <p className={css.noImageTitle}>
          There are no images. Please change your value in the field.
        </p>
      )}
      {modalIsOpen && (
        <ImageModal currentImg={currentImg} closeModal={closeModal} />
      )}
    </>
  );
};

export default App;
