import MessageBox from "@/app/share/message-box";
import FormHeader from "./formHeader";
import GridContent from "./gridContent";
import Hero from "./hero";
import ReviewsForm from "./reviewsForm";
import { IIncludesReviewsSection } from "@/types/reviews/includesReview.type";
import styles from "../index.module.scss";

const IncludesReviewsSection = ({ 
    reviews,
    submitMessage,
    showMessageBox,
    setShowMessageBox,
    handleSubmit,
    formState,
    formActions,
    ratingState,
    isSubmitting,
 }: IIncludesReviewsSection) => {
    return (
        <>
            {submitMessage && showMessageBox && (
                <MessageBox
                    title={submitMessage.type === "success" ? "Успешно!" : "Ошибка"}
                    message={submitMessage.text}
                    setShow={setShowMessageBox}
                />
            )}
            <section id="reviews-section">
                <div className={styles["reviews-root"]}>
                    <Hero />
                    <div className={styles.content}>
                    <GridContent reviews={reviews} />
                    <aside className={styles.form}>
                        <FormHeader />
                        <ReviewsForm
                        onSubmit={handleSubmit}
                        formState={formState}
                        formActions={formActions}
                        ratingState={ratingState}
                        isSubmitting={isSubmitting}
                        />
                    </aside>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IncludesReviewsSection;