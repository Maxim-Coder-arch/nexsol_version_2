import { motion } from "framer-motion";
import { ICaseDetailContent } from "@/types/cases/casesDetailContent.type";
import styles from "../index.module.scss";

const CaseDetailContent = ({ filteredCase }: ICaseDetailContent) => {
    return (
        <div
            className={styles["root-cases__monitor__demo__case-details__content"]}>
            <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={filteredCase.title}
                transition={{ duration: .5, ease: "easeOut" }}
            >{filteredCase.title}</motion.h3>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={filteredCase._id}
                transition={{ duration: .5, ease: "easeOut", delay: .1 }}
            >{filteredCase.description}</motion.p>
            {filteredCase.link ? (
            <motion.a 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={filteredCase.description}
                transition={{ duration: .5, ease: "easeOut", delay: .2 }}
            href={filteredCase.link}>Перейти</motion.a>
            ) : (
            <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={filteredCase.description}
                transition={{ duration: .5, ease: "easeOut", delay: .2 }}
            >Пользователь отказалася презентовать продукт</motion.span>
            ) }
            
        </div>
    )
}

export default CaseDetailContent;