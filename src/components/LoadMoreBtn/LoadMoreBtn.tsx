import css from "./LoadMoreBtn.module.css";

type Props = {
  getMoreImages: () => void;
};

const LoadMoreBtn = ({ getMoreImages }: Props) => {
  return (
    <button className={css.loadMoreBtn} type="button" onClick={getMoreImages}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
