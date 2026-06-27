"use client";

import React, { useState, useEffect } from "react";
import UserIcon from "@/public/icons/user";
import StarIcon from "@/public/icons/star";
import { IReview } from "@/types/reviews.type";
import styles from "./index.module.scss";

const ReviewsSection = () => {
  const [checked, setChecked] = useState(false);
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/reviews");
        const data = await response.json();
        
        if (data.success) {
          setReviews(data.reviews)
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!checked) {
      setSubmitMessage({ type: 'error', text: 'Подтвердите согласие на обработку персональных данных' });
      return;
    }
    
    if (name.length < 2) {
      setSubmitMessage({ type: 'error', text: 'Имя должно содержать минимум 2 символа' });
      return;
    }
    
    if (text.length < 10) {
      setSubmitMessage({ type: 'error', text: 'Текст отзыва должен содержать минимум 10 символов' });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          role: role.trim(),
          text: text.trim(),
          rating: Number(rating),
        })
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage({ type: 'success', text: data.message || 'Отзыв успешно отправлен!' });
        setName("");
        setRole("");
        setText("");
        setRating(5);
        setChecked(false);
        
        const refreshResponse = await fetch("/api/reviews");
        const refreshData = await refreshResponse.json();
        if (refreshData.success) {
          setReviews(refreshData.reviews);
        }
      } else {
        setSubmitMessage({ type: 'error', text: data.error || 'Ошибка при отправке отзыва' });
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage({ type: 'error', text: 'Ошибка соединения с сервером' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="reviews-section">
      <div className={styles["reviews-root"]}>
        <div className={styles["reviews-root__title"]}>
          <h3>Что говорят наши клиенты</h3>
        </div>
        <div className={styles["reviews-root__reviews-all"]}>
          <div className={styles["reviews-root__reviews-all__cards"]}>
            {reviews.slice(0,5).map((review) => (
              <div key={review._id} className={styles["reviews-root__reviews-all__cards__card"]}>
                <div className={styles["reviews-root__reviews-all__cards__card__text"]}>
                  <p>{review.text}</p>
                </div>
                <div className={styles["reviews-root__reviews-all__cards__card__user"]}>
                  <div className={styles["reviews-root__reviews-all__cards__card__usericon"]}>
                    <UserIcon />
                  </div>
                  <div className={styles["reviews-root__reviews-all__cards__card__usermeta"]}>
                    <h4>{review.name}</h4>
                    <p>{review.role}</p>
                  </div>
                </div>
                <div className={styles["reviews-root__reviews-all__cards__card__meta"]}>
                  <div>
                    {Array.from({length: 5}).map((_, starIndex) => (
                      <button key={`star-${review._id}-${starIndex}`}>
                        <StarIcon />
                      </button>
                    ))}
                  </div>
                  <p>{new Date(review.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles["reviews-root__reviews-all__form"]}>
            <h4>Оставить отзыв</h4>
            {submitMessage && (
              <div className={submitMessage.type === 'success' ? styles.successMessage : styles.errorMessage}>
                {submitMessage.text}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder="Ваше имя *" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
              <input 
                type="text" 
                placeholder="Бизнес / деятельность" 
                value={role} 
                onChange={(e) => setRole(e.target.value)} 
              />
              <textarea 
                placeholder="Ваш отзыв *" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                required
              />
              <div className={styles["reviews-root__reviews-all__form__rating-input"]}>
                <span>Оценка по 5 бальной шкале</span>
                <div>
                  {Array.from({length: 5}).map((_, starIndex) => (
                    <button 
                      key={`form-star-${starIndex}`}
                      type="button"
                      onClick={() => setRating(starIndex + 1)}
                      onMouseEnter={() => setHoverRating(starIndex + 1)}
                      onMouseLeave={() => setHoverRating(0)}
                    >
                      <StarIcon />
                    </button>
                  ))}
                </div>
              </div>
              <div className={styles["reviews-root__reviews-all__form__submit"]}>
                <div className={styles["reviews-root__reviews-all__form__submit__privacy"]}>
                  <input 
                    type="checkbox" 
                    checked={checked} 
                    onChange={(e) => setChecked(e.target.checked)}
                  />
                  <span>Я соглашаюсь на обработку персональных данных в соответствии с <a href="/pages/privacy">политикой конфиденциальности</a></span>
                </div>
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Отправка...' : 'Отправить'}
                </button>
                <p>Все отзывы проходят модерацию перед публикацией</p>
              </div>
            </form>
          </div>
        </div>
        <div className={styles["reviews-root__other-reviews"]}>
          {reviews.slice(5, reviews.length).map((review) => (
            <div className={styles["reviews-root__other-reviews__review"]} key={review._id}>
              <div className={styles["reviews-root__other-reviews__review__text"]}>
                <p>{review.text}</p>
              </div>
              <div className={styles["reviews-root__other-reviews__review__main"]}>
                <div className={styles["reviews-root__other-reviews__review__icon"]}>
                  <UserIcon />
                </div>
                <div className={styles["reviews-root__other-reviews__review__user"]}>
                  <h4>{review.name}</h4>
                  <p>{review.role}</p>
                </div>
              </div>
              <div className={styles["reviews-root__other-reviews__meta"]}>
                <div className={styles["reviews-root__other-reviews__meta__rating"]}>
                  {Array.from({length: 5}).map((_, starIndex) => (
                    <button key={`other-star-${review._id}-${starIndex}`}>
                      <StarIcon />
                    </button>
                  ))}
                </div>
                <p>{new Date(review.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection;