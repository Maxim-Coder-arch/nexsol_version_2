'use client';

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqData as data } from "@/configs-and-data/faq.cnf";
import styles from "./index.module.scss";

const FaqSection = () => {
    const [activeQuestion, setActiveQuestion] = useState(0);

    return (
        <section id="faq-section">
            <div className={styles["root-faq"]}>
                <div className={styles["root-faq__title"]}>
                    <h2>Часто задаваемые вопросы</h2>
                </div>
                <div className={styles["root-faq__questions"]}>

                    {data.map((question, index) => {
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
                    })}
                </div>
            </div>
        </section>
    )
}

export default FaqSection;