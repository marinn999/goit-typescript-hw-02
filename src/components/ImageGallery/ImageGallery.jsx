import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <div>
      <ul className={s.list}>
        {images.map((image) => (
          <li key={image.id} className={s.item}>
            <ImageCard
              url={image.urls.small}
              name={image.urls.alt_description}
              fullInfo={image}
              openModal={openModal}
            />
          </li>
        ))}
        <li></li>
      </ul>
    </div>
  );
};

export default ImageGallery;
