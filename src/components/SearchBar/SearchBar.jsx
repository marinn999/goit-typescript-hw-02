import { Icon } from "@iconify/react";
import s from "./SearchBar.module.css";
import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";

// handleSearch ф-я ,яка передає значення поля введення під час сабміту форми
//Функція onSubmit буде викликана при сабміті форми(коли користувач здійснить пошук),
//щоб обробити пошук
const SearchBar = ({ handleSearch }) => {
  return (
    <header className={s.header}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, options) => {
          //Якщо values.topic не порожнє (після видалення пробілів),
          if (!values.query.trim()) {
            toast.error("You should write smth. The field can not be empty:(");
            return;
          }
          // викликаємо ф-ю handleSearch з введеним значенням і очищуємо форму.
          handleSearch(values.query);
          options.resetForm();
        }}
      >
        <Form className={s.form}>
          <Field
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={s.input}
          />
          <button type="submit" className={s.btn}>
            <Icon icon="lets-icons:search-duotone" />
          </button>
        </Form>
      </Formik>
      <Toaster
        position="top-center"
        toastOptions={{ style: { color: "white", backgroundColor: "blue" } }}
      ></Toaster>
    </header>
  );
};

export default SearchBar;
