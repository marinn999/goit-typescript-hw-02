import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import toast from "react-hot-toast";
import fetch from "../../fetch";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { Img } from "./App.types";
import { FetchType } from "../../fetch.types";

const App: React.FC = () => {
  const [searchWord, setSearchWord] = useState<string>("");
  const [images, setImages] = useState<Img[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<boolean>(false);
  const [dataModal, setDataModal] = useState<Img | null>(null);

  const handleSearch = (query: string): void => {
    setSearchWord(query);
    setLoading(true);
    setPage(1);
    setImages([]);
  };

  const openModal = (data: Img): void => {
    setSelectedImage(true);
    setDataModal(data);
  };

  const closeModal = (): void => {
    setSelectedImage(false);
  };

  const loadMore = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    async function fetchImages() {
      if (searchWord) {
        try {
          setLoading(true);
          setTotalPages(0);
          const data = await fetch<FetchType>(searchWord, page);
          setError(false);
          setImages((prevImages) => [...prevImages, ...data.results]);
          setTotalPages(data.total_pages);
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      }
    }
    fetchImages();
  }, [searchWord, page]);

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      {selectedImage && dataModal && (
        <ImageModal
          dataModal={dataModal}
          isOpen={selectedImage}
          closeModal={closeModal}
        />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ImageGallery images={images} openModal={openModal} />
      {totalPages > page && <LoadMoreBtn loadMore={loadMore} />}
    </>
  );
};

export default App;
