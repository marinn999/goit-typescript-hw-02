import { Img, Imgs } from "../App/App.types";

export interface ImageGalleryProps {
  images: Imgs;
  openModal: (data: Img) => void;
}
