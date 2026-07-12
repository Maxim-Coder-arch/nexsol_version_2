import ArrowIcon from "@/public/icons/arrow";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../index.module.scss";

interface IIncludesScrollController {
    scrollTop: () => void;
}

const IncludesScrollController = ({ scrollTop }: IIncludesScrollController) => {
    return (
        <AnimatePresence>
            <motion.button 
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: 10}}
                onClick={scrollTop}
                className={styles["scroll-controller"]}>
                    <ArrowIcon />
                </motion.button>
        </AnimatePresence>
    )
}

export default IncludesScrollController;