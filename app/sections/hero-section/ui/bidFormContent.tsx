import { animationConfig__heroSection, transitionAnimation__heroSection } from "@/configs-and-data/heroSectionConfig";
import { motion } from "framer-motion";
import { IBidFormContent } from "@/types/hero-section/bidFormContent.type";
import styles from "../index.module.scss";

const advantages = [
    "Разработка сайтов",
    "CRM и автоматизация",
    "Контекстная реклама",
    "Аналитика и масштабирование",
];

const BidFormContent = ({
    isAnimate,
    setIsPackageServiceCreatorOpen,
}: IBidFormContent) => {
    return (
        <div className={styles["root-hero-section__bid-form__content"]}>

            <motion.span
                initial={animationConfig__heroSection.initial}
                animate={isAnimate ? animationConfig__heroSection.animate : {}}
                transition={{ ...transitionAnimation__heroSection, delay: .25 }}
                className={styles["root-hero-section__bid-form__content__badge"]}
            >
                DIGITAL AGENCY
            </motion.span>

            <motion.h2
                initial={animationConfig__heroSection.initial}
                animate={isAnimate ? animationConfig__heroSection.animate : {}}
                transition={{ ...transitionAnimation__heroSection, delay: .35 }}
            >
                Создаем цифровые продукты,
                которые работают
                на рост вашего бизнеса.
            </motion.h2>

            <motion.p
                initial={animationConfig__heroSection.initial}
                animate={isAnimate ? animationConfig__heroSection.animate : {}}
                transition={{ ...transitionAnimation__heroSection, delay: .5 }}
            >
                Проектируем современные сайты, внедряем CRM, автоматизируем
                процессы и строим маркетинговые системы, которые помогают
                компаниям получать больше клиентов и масштабироваться.
            </motion.p>

            <motion.ul
                initial={animationConfig__heroSection.initial}
                animate={isAnimate ? animationConfig__heroSection.animate : {}}
                transition={{ ...transitionAnimation__heroSection, delay: .65 }}
                className={styles["root-hero-section__bid-form__content__advantages"]}
            >
                {advantages.map((item) => (
                    <li key={item}>
                        <span />
                        {item}
                    </li>
                ))}
            </motion.ul>

            <motion.button
                initial={animationConfig__heroSection.initial}
                animate={isAnimate ? animationConfig__heroSection.animate : {}}
                transition={{ ...transitionAnimation__heroSection, delay: .8 }}
                onClick={() => setIsPackageServiceCreatorOpen(true)}
            >
                Создать индивидуальный пакет услуг
            </motion.button>

        </div>
    );
};

export default BidFormContent;