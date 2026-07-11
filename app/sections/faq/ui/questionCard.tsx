import { AnimatePresence, motion } from "framer-motion";
import { IQuestionCard } from "@/types/faq/questionCard.type";
import styles from "../index.module.scss";

const QuestionCard = ({ 
    question, 
    index, 
    setActiveQuestion, 
    activeQuestion
 }: IQuestionCard) => {
    return (
         <div key={question.answer} className={styles["root-faq__questions__block"]} onClick={() => setActiveQuestion(index)}>
                <div className={styles["root-faq__questions__block__header"]}>
                    <span>{index + 1 < 10 ? `0${index + 1}` : index + 1}.</span>
                    <h3>{question.question}</h3>
                </div>
                {activeQuestion === index && (
                    <AnimatePresence>
                        <motion.p
                        initial={{height: 0}}
                        exit={{height: 0}}
                        animate={{height: "fit-content"}}
                        >{question.answer}</motion.p>
                    </AnimatePresence>
                )}
            </div>
    )
}

export default QuestionCard;