'use client';

import { animate, motion, useMotionValue } from "framer-motion";
import styles from "./index.module.scss";
import { useEffect, useRef } from "react";

const RunningBanner = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const baseX = useMotionValue(0);
    useEffect(() => {
        if (!containerRef.current) return;
        const containerWidth = containerRef.current.scrollWidth / 2;
        const animateX = animate(baseX, -containerWidth, {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop"
        });
        return () => animateX.stop();
    }, [baseX]);

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

export default RunningBanner;