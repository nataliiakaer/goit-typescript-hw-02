import { useEffect, useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery.tsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.tsx";
import SearchBar from "../SearchBar/SearchBar.tsx";
import Loader from "../Loader/Loader.tsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.tsx";
import { fetchImagesWithSearchValue } from "../../images_api.ts";
import ImageModal from "../ImageModal/ImageModal.tsx";
import { CurrentImage, Image } from "./App.types.tsx";
import css from "./App.module.css";

interface FetchImagesResponse {
  results: Image[];
  total_pages: number;
}

const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isSearchPerformed, setIsSearchPerformed] = useState<boolean>(false);
  const [loadMore, setLoadMore] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [showBtn, setShowBtn] = useState<boolean | 0>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentImg, setCurrentImg] = useState<CurrentImage | null>(null);

  const openModal = (): void => {
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
  };

  const onSearch = (event: string): void => {
    setSearchValue(event);
    setImages([]);
    setLoadMore(1);
    setIsSearchPerformed(true);
  };

  const getMoreImages = (): void => {
    if (loading || loadMore >= totalPages) return;
    setLoadMore(loadMore + 1);
  };

  useEffect(() => {
    if (!searchValue) return;

    async function fetchImage() {
      try {
        setLoading(true);
        const data = await fetchImagesWithSearchValue<FetchImagesResponse>(
          searchValue,
          loadMore
        );
        setImages((prevData) => [...prevData, ...data.results]);

        setShowBtn(data.total_pages && data.total_pages != loadMore);
        setTotalPages(data.total_pages); // Оновлюємо загальну кількість сторінок
        setShowBtn(loadMore < data.total_pages);
        setError(false);
      } catch (error) {
        setError(true);
        console.log(error);
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
          imagesList={images}
          openModal={openModal}
          setCurrentImg={setCurrentImg}
        />
      )}
      {showBtn && Array.isArray(images) && images.length > 0 && (
        <LoadMoreBtn getMoreImages={getMoreImages} />
      )}
      {isSearchPerformed && Array.isArray(images) && images.length === 0 && (
        <p className={css.noImageTitle}>
          There are no images. Please change your value in the field.
        </p>
      )}
      {modalIsOpen && currentImg && (
        <ImageModal currentImage={currentImg} closeModal={closeModal} />
      )}
    </>
  );
};

export default App;
