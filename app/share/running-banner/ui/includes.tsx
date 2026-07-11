import { motion, MotionValue } from "framer-motion";
import styles from "../index.module.scss";
import { IIncludesRunningBanner } from "@/types/share/running-banner/includesRunningBanner.type";

const IncludesRunningBanner = ({ 
    containerRef,
    baseX,
 }: IIncludesRunningBanner) => {
    return (
        <div className={styles["running-banner"]}>
            <motion.div 
            ref={containerRef}
            style={{ x: baseX }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={styles["running-banner__track"]}>
                {Array.from({ length: 14 }).map((_, index) => (
                    <div key={index} className={styles["running-banner__track__label"]}>
                        Solid Nexus - продвижение малого бизнеса
                    </div>
                ))}
                {Array.from({ length: 14 }).map((_, index) => (
                    <div key={`$dup-${index}`} className={styles["running-banner__track__label"]}>
                        Solid Nexus - продвижение малого бизнеса
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default IncludesRunningBanner;