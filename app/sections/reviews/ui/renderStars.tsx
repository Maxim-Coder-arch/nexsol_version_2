import StarIcon from "@/public/icons/star";
import { IRenderStars } from "@/types/reviews/renderStars.type";
import styles from "../index.module.scss";

const RenderStars = ({ 
  rating,
  hoverRating,
  setRating,
  setHoverRating,
  interactive = false,
}: IRenderStars) => {
  const displayRating = hoverRating || rating;
  
  return Array.from({ length: 5 }, (_, index) => {
    const value = index + 1;
    return (
      <button
        key={value}
        type="button"
        disabled={!interactive}
        className={`${styles.star} ${
          value <= displayRating ? styles["star--filled"] : styles["star--empty"]
        }`}
        onClick={() => interactive && setRating(value)}
        onMouseEnter={() => interactive && setHoverRating(value)}
        onMouseLeave={() => interactive && setHoverRating(0)}
      >
        <StarIcon />
      </button>
    );
  });
};

export default RenderStars;