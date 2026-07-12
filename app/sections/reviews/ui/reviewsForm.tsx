import RenderStars from "./renderStars";
import { IReviewsForm } from "@/types/reviews/reviewsForm.type";
import styles from "../index.module.scss";

const ReviewsForm = ({
  onSubmit,
  formState,
  formActions,
  ratingState,
  isSubmitting,
}: IReviewsForm) => {
  const { name, role, text, checked } = formState;
  const { setName, setRole, setText, setChecked } = formActions;

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Ваше имя *"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Компания / сфера деятельности"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <textarea
        placeholder="Расскажите о своем опыте сотрудничества *"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <div className={styles.form__rating}>
        <span>Оцените работу нашей команды</span>
        <div className={styles.stars}>
          <RenderStars {...ratingState} interactive={true} />
        </div>
      </div>
      <label className={styles.form__privacy}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <span>
          Я соглашаюсь на обработку персональных данных в соответствии с{" "}
          <a href="/pages/privacy" target="_blank" rel="noopener noreferrer">
            политикой конфиденциальности
          </a>
        </span>
      </label>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Отправка..." : "Отправить отзыв"}
      </button>
      <small>Все отзывы проходят модерацию перед публикацией.</small>
    </form>
  );
};

export default ReviewsForm;