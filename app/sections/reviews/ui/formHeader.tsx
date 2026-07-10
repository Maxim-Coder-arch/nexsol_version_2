import styles from "../index.module.scss";

const FormHeader = () => {
    return (
        <div className={styles.form__header}>
            <span>
                Оставить отзыв
            </span>
            <h3>
                Поделитесь впечатлением
                о сотрудничестве

            </h3>
            <p>
                После проверки модератором
                отзыв появится на сайте.
            </p>
        </div>
    )
}

export default FormHeader;