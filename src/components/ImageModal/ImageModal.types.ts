import { Img } from "../App/App.types";

export interface ImageModalProps {
  dataModal: Img;
  isOpen: boolean;
  closeModal: () => void;
}
