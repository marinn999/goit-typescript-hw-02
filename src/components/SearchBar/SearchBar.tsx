import { Icon } from "@iconify/react";
import s from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { Field, Form, Formik } from "formik";
import { FC } from "react";
import { SearchBarProps } from "./SearchBar.types";

const SearchBar: FC<SearchBarProps> = ({ handleSearch }) => {
  return (
    <header className={s.header}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, options) => {
          if (!values.query.trim()) {
            toast.error("You should write smth. The field can not be empty:(");
            return;
          }
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
