import { Field, Form, Formik, FormikValues } from "formik";
import css from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { FC } from "react";

const INITIAL_VALUES = {
  search: "",
};

interface SearchBarProps  {
  onSearch: (values: string) => void;
};

const SearchValidationSchema = Yup.object().shape({
  search: Yup.string()
    .min(2, "Too short!")
    .max(100, "Too long!")
    .required("Required field for filling in"),
});

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (values: FormikValues): void => {
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
