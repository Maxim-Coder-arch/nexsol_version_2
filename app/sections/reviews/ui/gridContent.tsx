import UserIcon from "@/public/icons/user";
import RenderStars from "./renderStars";
import { IGridContent } from "@/types/reviews/gridContent.type";
import styles from "../index.module.scss";

const GridContent = ({ reviews }: IGridContent) => {
  return (
    <div className={styles.grid}>
      {reviews.map((review) => (
        <article key={review._id} className={styles.card}>
          <div className={styles.card__rating}>
            <RenderStars
              rating={review.rating}
              hoverRating={0}
              setRating={() => {}}
              setHoverRating={() => {}}
              interactive={false}
            />
          </div>
          <p className={styles.card__text}>{review.text}</p>
          <div className={styles.card__footer}>
            <div className={styles.card__user}>
              <div className={styles.card__avatar}>
                <UserIcon />
              </div>
              <div>
                <h4>{review.name}</h4>
                <span>{review.role || "Клиент"}</span>
              </div>
            </div>
            <time>{new Date(review.createdAt).toLocaleDateString()}</time>
          </div>
        </article>
      ))}
    </div>
  );
};

export default GridContent;