import { FC } from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  getMoreImages: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ getMoreImages }) => {
  return (
    <button className={css.loadMoreBtn} type="button" onClick={getMoreImages}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
