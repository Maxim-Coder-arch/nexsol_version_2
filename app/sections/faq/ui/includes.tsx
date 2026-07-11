import QuestionCard from "./questionCard";
import { faqData as data } from "@/configs-and-data/faq.cnf";
import { IIncludesFaqSection } from "@/types/faq/includes.type";
import styles from "../index.module.scss";

const IncludesFaqSection = ({ setActiveQuestion, activeQuestion }: IIncludesFaqSection) => {
    return (
        <section id="faq-section">
            <div className={styles["root-faq"]}>
                <div className={styles["root-faq__title"]}>
                    <h2>Часто задаваемые вопросы</h2>
                </div>
                <div className={styles["root-faq__questions"]}>
                    {data.map((question, index) => {
                        return (
                            <QuestionCard
                                key={index}
                                question={question}
                                index={index}
                                setActiveQuestion={setActiveQuestion} 
                                activeQuestion={activeQuestion}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default IncludesFaqSection;