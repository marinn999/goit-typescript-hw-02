import React from "react";

const ImageCard = ({ url, name, fullInfo, openModal }) => {
  function handleClickOnImage() {
    openModal(fullInfo);
  }
  return (
    <>
      <img src={url} alt={name} onClick={handleClickOnImage} />
    </>
  );
};

export default ImageCard;
