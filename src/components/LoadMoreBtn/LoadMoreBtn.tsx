import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ getMoreImages }) => {
  return (
    <button className={css.loadMoreBtn} type="button" onClick={getMoreImages}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
