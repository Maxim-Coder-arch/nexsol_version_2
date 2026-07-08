import { motion } from "framer-motion";
import { ICaseDetailMeta } from "@/types/cases/casesDetailMeta.type";
import styles from "../index.module.scss";

const CaseDetailMeta = ({ filteredCase }: ICaseDetailMeta) => {
    return (
        <div className={styles["root-cases__monitor__demo__case-details__meta"]}>
            <ol>
            {filteredCase.additionalInfo.map((additional, index) => {
                return (
                <motion.li 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5, ease: "easeOut", delay: index * .1 }}
                key={additional.value}>
                    <h4>{additional.label}</h4>
                    <span>-</span>
                    <p>{additional.value}</p>
                </motion.li>
                )
            })}
            </ol>
        </div>
    )
}

export default CaseDetailMeta;