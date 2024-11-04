import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import toast from "react-hot-toast";
import fetch from "./fetch";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  // стан для пошукового запиту
  const [searchWord, setSearchWord] = useState("");
  // для зображень
  const [images, setImages] = useState([]);
  //відкриття зображень у модальному вікні, ідстеження поточного обраного зображення
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [selectedImage, setSelectedImage] = useState(false);
  const [dataModal, setDataModal] = useState({});

  //handleSearch буде відповідати за код, який необхідно виконати при сабміті форми
  const handleSearch = (query) => {
    setSearchWord(query);
    setLoading(true);
    setPage(1);
    //Скидаємо зображення при новому пошуку
    setImages([]);
  };

  const openModal = (data) => {
    setSelectedImage(true);
    setDataModal(data);
  };

  const closeModal = () => {
    setSelectedImage(false);
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    async function fetchImages() {
      if (searchWord) {
        try {
          //дані зараз завантажуються
          setLoading(true);
          // під час нового пошуку кількість сторінок спочатку буде встановлена на 0
          setTotalPages(0);

          //fetchImages викликається щоразу, коли змінюється searchWord або page
          const data = await fetch(searchWord, page);
          // на цей момент помилки немає
          setError(false);

          // Зберігаю отримані зображення в стані Арр (додаю нові зображення до вже існуючиx)
          setImages((prev) => [...prev, ...data.results]);
          setTotalPages(data.total_pages);
        } catch (error) {
          setError(true);
        } finally {
          // незалежно від того, запит успішний чи ні, індикатор завантаження зупиниться після виконання запиту або обробки помилки
          setLoading(false);
        }
      }
    }
    fetchImages();
  }, [searchWord, page]);
  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      {selectedImage && (
        <ImageModal
          dataModal={dataModal}
          isOpen={selectedImage}
          closeModal={closeModal}
        />
      )}
      {/* показується якщо `loading` true */}
      {loading && <Loader />}
      {/* показується якщо `error` true */}
      {error && <ErrorMessage />}
      <ImageGallery images={images} openModal={openModal} />

      {/* * Коли на бекенді закінчилися фото (остання сторінка), приховуємо кнопку "Load more". */}
      {totalPages > page && <LoadMoreBtn loadMore={loadMore} />}
    </>
  );
}

export default App;
