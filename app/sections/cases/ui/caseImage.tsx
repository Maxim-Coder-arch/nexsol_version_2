import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ICaseImage } from "@/types/cases/caseImage.type";
import styles from "../index.module.scss";

const CaseImage = ({ activeCase, filteredCase }: ICaseImage) => {
    return (
        <AnimatePresence>
            <motion.div 
            key={activeCase}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .5 }}
            className={styles["root-cases__monitor__demo__case-details__image"]}>
            <Image 
                src={filteredCase.banner} 
                alt={filteredCase.title} 
                width={400}
                height={300} />
            </motion.div>
        </AnimatePresence>
    )
}

export default CaseImage;