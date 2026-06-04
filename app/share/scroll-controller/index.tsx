'use client';

import ArrowIcon from "@/public/icons/arrow";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./index.module.scss";

const ScrollController = () => {
    const [showScrollController, setShowScrollController] = useState(false);
    useEffect(() => {
        const windowScrollListener = () => {
            const scrolly = window.scrollY;
            if (scrolly > 500) setShowScrollController(true)
            else setShowScrollController(false);
        }
        window.addEventListener("scroll", windowScrollListener);

        return () => window.removeEventListener("scroll", windowScrollListener);
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };


    return (
        showScrollController && <AnimatePresence>
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

export default ScrollController;