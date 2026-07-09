"use client";

import React, { useState, useEffect } from "react";
import UserIcon from "@/public/icons/user";
import StarIcon from "@/public/icons/star";
import MessageBox from "@/app/share/message-box";

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

    const [submitMessage, setSubmitMessage] = useState<{
        type: "success" | "error";
        text: string;
    } | null>(null);

    const [showMessageBox, setShowMessageBox] = useState(false);

    const renderStars = (
        rating: number,
        hover: number = 0,
        interactive: boolean = false
    ) => {

        const displayRating = hover || rating;

        return Array.from({ length: 5 }, (_, index) => {

            const value = index + 1;

            return (

                <button
                    key={value}
                    type="button"
                    disabled={!interactive}
                    className={`${styles.star} ${
                        value <= displayRating
                            ? styles["star--filled"]
                            : styles["star--empty"]
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

    useEffect(() => {

        const fetchReviews = async () => {

            try {

                const response = await fetch("/api/reviews");

                const data = await response.json();

                if (data.success) {

                    setReviews(data.reviews);

                }

            } catch (error) {

                console.error(error);

            }

        };

        fetchReviews();

    }, []);

    const handleSubmit = async (
        event: React.FormEvent
    ) => {

        event.preventDefault();

        if (!checked) {

            setSubmitMessage({
                type: "error",
                text: "Подтвердите согласие на обработку персональных данных",
            });

            return;

        }

        if (name.length < 2) {

            setSubmitMessage({
                type: "error",
                text: "Имя должно содержать минимум 2 символа",
            });

            return;

        }

        if (text.length < 10) {

            setSubmitMessage({
                type: "error",
                text: "Текст отзыва должен содержать минимум 10 символов",
            });

            return;

        }

        setIsSubmitting(true);

        setSubmitMessage(null);

        try {

            const response = await fetch("/api/reviews", {

                method: "POST",

                headers: {

                    "Content-Type": "application/json",

                },

                body: JSON.stringify({

                    name: name.trim(),

                    role: role.trim(),

                    text: text.trim(),

                    rating: Number(rating),

                }),

            });

            const data = await response.json();

            if (response.ok) {

                setShowMessageBox(true);

                setSubmitMessage({

                    type: "success",

                    text: data.message || "Отзыв успешно отправлен!",

                });

                setName("");

                setRole("");

                setText("");

                setRating(5);

                setChecked(false);

                const refresh = await fetch("/api/reviews");

                const refreshData = await refresh.json();

                if (refreshData.success) {

                    setReviews(refreshData.reviews);

                }

            } else {

                setSubmitMessage({

                    type: "error",

                    text: data.error || "Ошибка отправки",

                });

            }

        } catch (error) {

            console.error(error);

            setSubmitMessage({

                type: "error",

                text: "Ошибка соединения с сервером",

            });

        } finally {

            setIsSubmitting(false);

        }

    };

    return (

        <section id="reviews-section">

            <div className={styles["reviews-root"]}>

                <div className={styles.hero}>

                    <div className={styles.hero__badge}>

                        <span />

                        <p>CLIENT REVIEWS</p>

                    </div>

                    <h2>

                        Нам доверяют.
                        <br />
                        И этим мы гордимся.

                    </h2>

                    <p>

                        Мы стремимся делать продукты,
                        которые действительно помогают
                        бизнесу развиваться.
                        Ниже — отзывы клиентов,
                        которые уже работали с нами.

                    </p>

                </div>

                <div className={styles.content}>

                    <div className={styles.grid}>

                        {reviews.map((review) => (

                            <article
                                key={review._id}
                                className={styles.card}
                            >

                                <div className={styles.card__rating}>

                                    {renderStars(review.rating)}

                                </div>

                                <p className={styles.card__text}>

                                    {review.text}

                                </p>

                                <div className={styles.card__footer}>

                                    <div className={styles.card__user}>

                                        <div className={styles.card__avatar}>

                                            <UserIcon />

                                        </div>

                                        <div>

                                            <h4>

                                                {review.name}

                                            </h4>

                                            <span>

                                                {review.role || "Клиент"}

                                            </span>

                                        </div>

                                    </div>

                                    <time>

                                        {new Date(
                                            review.createdAt
                                        ).toLocaleDateString()}

                                    </time>

                                </div>

                            </article>

                        ))}

                    </div>

                    <aside className={styles.form}>

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

                        {submitMessage &&
                            showMessageBox && (

                                <MessageBox
                                    title={
                                        submitMessage.type === "success"
                                            ? "Успешно!"
                                            : "Ошибка"
                                    }
                                    message={submitMessage.text}
                                    setShow={setShowMessageBox}
                                />

                            )}

                        <form
                            onSubmit={handleSubmit}
                        >
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

                                <span>

                                    Оцените работу нашей команды

                                </span>

                                <div className={styles.stars}>

                                    {renderStars(
                                        rating,
                                        hoverRating,
                                        true
                                    )}

                                </div>

                            </div>

                            <label
                                className={styles.form__privacy}
                            >

                                <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={(e) =>
                                        setChecked(
                                            e.target.checked
                                        )
                                    }
                                />

                                <span>

                                    Я соглашаюсь на обработку
                                    персональных данных в
                                    соответствии с{" "}

                                    <a
                                        href="/privacy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        политикой конфиденциальности
                                    </a>

                                </span>

                            </label>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                            >

                                {isSubmitting
                                    ? "Отправка..."
                                    : "Отправить отзыв"}

                            </button>

                            <small>

                                Все отзывы проходят модерацию
                                перед публикацией.

                            </small>

                        </form>

                    </aside>

                </div>

            </div>

        </section>

    );

};

export default ReviewsSection;