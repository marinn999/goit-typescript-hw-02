import ReactModal from "react-modal";
import s from "./ImageModal.module.css";

const ImageModal = ({ dataModal, isOpen, closeModal }) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={closeModal} style={s.modal}>
      <p className={s.helper}>Press Esc to close or click anywhere</p>
      {dataModal.description && (
        <p className={s.descr}>{dataModal.description}</p>
      )}
      <img
        src={dataModal.urls.regular}
        alt={dataModal.alt_description}
        className={s.img}
      />
      {dataModal.user.username && (
        <p className={s.author}>Author: {dataModal.user.username}</p>
      )}
    </ReactModal>
  );
};

export default ImageModal;
