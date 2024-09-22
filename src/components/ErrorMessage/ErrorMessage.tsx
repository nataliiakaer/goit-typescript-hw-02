import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <section className={css.error}>
      <p>
        Whoops, something went wrong! Please try reloading this page or try
        again after!
      </p>
    </section>
  );
};

export default ErrorMessage;
