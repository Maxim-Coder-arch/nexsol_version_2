import { animationConfig__heroSection, transitionAnimation__heroSection } from "@/configs-and-data/heroSectionConfig";
import { motion } from "framer-motion";
import { IBidFormContent } from "@/types/hero-section/bidFormContent.type";
import styles from "../index.module.scss";

const BidFormContent = ({ isAnimate, setIsPackageServiceCreatorOpen }: IBidFormContent) => {
    return (
        <div className={styles["root-hero-section__bid-form__content"]}>
            <motion.h2
                initial={animationConfig__heroSection.initial}
                animate={isAnimate ? animationConfig__heroSection.animate : {}}
                transition={{...transitionAnimation__heroSection, delay: .3}}
            >NEXSOL — это разработка сайтов, аналитика, CRM и реклама для бизнеса.</motion.h2>
            <motion.p
                initial={animationConfig__heroSection.initial}
                animate={isAnimate ? animationConfig__heroSection.animate : {}}
                transition={{...transitionAnimation__heroSection, delay: .5}}
            >Мы строим систему, которая работает 24/7 и реально увеличивает продажи.</motion.p>
            <motion.button 
                initial={animationConfig__heroSection.initial}
                animate={isAnimate ? animationConfig__heroSection.animate : {}}
                transition={{...transitionAnimation__heroSection, delay: .7}}
                onClick={() => setIsPackageServiceCreatorOpen(true)}
            >Создать свой пакет услуг</motion.button>
        </div>
    )
}

export default BidFormContent;