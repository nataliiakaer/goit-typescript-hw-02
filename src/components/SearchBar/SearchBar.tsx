import { Field, Form, Formik } from "formik";
import css from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

const INITIAL_VALUES = {
  search: "",
};

const SearchValidationSchema = Yup.object().shape({
  search: Yup.string()
    .min(2, "Too short!")
    .max(100, "Too long!")
    .required("Required field for filling in"),
});

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (values) => {
    onSearch(values.search);
  };

  return (
    <header className={css.header}>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={SearchValidationSchema}
      >
        <Form className={css.form}>
          <div className={css.container}>
            <Field
              className={css.input}
              type="text"
              name="search"
              placeholder="Search images and photos"
            />
            <button className={css.btn} type="submit">
              <CiSearch />
            </button>
          </div>
          <ErrorMessage className={css.error} name="search" component="span" />
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
