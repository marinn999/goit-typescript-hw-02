import { FC } from "react";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard: FC<ImageCardProps> = ({ url, name, fullInfo, openModal }) => {
  function handleClickOnImage(): void {
    openModal(fullInfo);
  }
  return (
    <>
      <img src={url} alt={name} onClick={handleClickOnImage} />
    </>
  );
};

export default ImageCard;
