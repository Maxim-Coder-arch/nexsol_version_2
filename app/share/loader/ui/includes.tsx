import { AnimatePresence, motion } from "framer-motion";
import styles from "../index.module.scss";

const IncludesLoaderComponent = ({ isLoading }: { isLoading: boolean }) => {
    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                className={styles["loader-block"]}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                >
                <motion.div
                    className={styles["loader-block__line"]}
                    initial={{ width: 0 }}
                    animate={{ width: "100%", opacity: 0 }}
                    transition={{
                    width: { duration: 0.3 },
                    opacity: { delay: 0.45, duration: 0.2 },
                    }}
                />

                <motion.div
                    className={styles["loader-block__brand"]}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                >
                    NEXSOL
                </motion.div>

                <div className={styles["loader-block__blocks"]}>
                    {Array.from({ length: 5 }).map((_, index) => (
                    <motion.div
                        key={index}
                        className={styles["loader-block__blocks__item"]}
                        initial={{ height: "0%" }}
                        animate={{ height: ["0%", "100%", "100%", "0%"] }}
                        transition={{
                        duration: 0.7,
                        delay: 0.8 + index * 0.08,
                        times: [0, 0.45, 0.8, 1],
                        ease: "easeInOut",
                        }}
                    />
                    ))}
                </div>

                <motion.div
                    className={styles["loader-block__brand-cover"]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.35, duration: 0.15 }}
                />
                </motion.div>
            )}
            </AnimatePresence>
    )
}

export default IncludesLoaderComponent;