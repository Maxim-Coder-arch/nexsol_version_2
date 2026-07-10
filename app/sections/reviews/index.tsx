"use client";

import React, { useState, useEffect } from "react";
import { IReview } from "@/types/reviews.type";
import IncludesReviewsSection from "./ui/includes";

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/reviews");
        const data = await response.json();
        if (data.success) setReviews(data.reviews);
      } catch (error) {
        console.error(error);
      }
    };
    fetchReviews();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!checked) {
      setSubmitMessage({ type: "error", text: "Подтвердите согласие на обработку персональных данных" });
      setShowMessageBox(true);
      return;
    }

    if (name.length < 2) {
      setSubmitMessage({ type: "error", text: "Имя должно содержать минимум 2 символа" });
      setShowMessageBox(true);
      return;
    }

    if (text.length < 10) {
      setSubmitMessage({ type: "error", text: "Текст отзыва должен содержать минимум 10 символов" });
      setShowMessageBox(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), role: role.trim(), text: text.trim(), rating: Number(rating) }),
      });

      const data = await response.json();

      if (response.ok) {
        setShowMessageBox(true);
        setSubmitMessage({ type: "success", text: data.message || "Отзыв успешно отправлен!" });

        setName("");
        setRole("");
        setText("");
        setRating(5);
        setChecked(false);

        const refresh = await fetch("/api/reviews");
        const refreshData = await refresh.json();
        if (refreshData.success) setReviews(refreshData.reviews);
      } else {
        setSubmitMessage({ type: "error", text: data.error || "Ошибка отправки" });
        setShowMessageBox(true);
      }
    } catch (error) {
      setSubmitMessage({ type: "error", text: "Ошибка соединения с сервером" });
      setShowMessageBox(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formState = { name, role, text, rating, checked };
  const formActions = { setName, setRole, setText, setRating, setChecked };
  const ratingState = { rating, hoverRating, setRating, setHoverRating };

  return <IncludesReviewsSection
    reviews={reviews}
    submitMessage={submitMessage}
    showMessageBox={showMessageBox}
    setShowMessageBox={setShowMessageBox}
    handleSubmit={handleSubmit}
    formState={formState}
    formActions={formActions}
    ratingState={ratingState}
    isSubmitting={isSubmitting}
  />
};

export default ReviewsSection;