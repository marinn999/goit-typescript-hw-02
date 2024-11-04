import { FC } from "react";
import s from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ loadMore }) => {
  return (
    <button onClick={loadMore} className={s.btn}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
