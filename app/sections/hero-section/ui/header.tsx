import { animationConfig__heroSection, titleData__heroSection, transitionAnimation__heroSection } from "@/configs-and-data/heroSectionConfig";
import { motion } from "framer-motion";
import { IRootSectionHeader } from "@/types/hero-section/rootSectionHeader.type";
import styles from "../index.module.scss";

const RootSectionHeader = ({ isAnimate }: IRootSectionHeader) => {
    return (
        <div className={styles["root-hero-section__header"]}>
          <h1>
             {titleData__heroSection.map((label, index) => (
                <motion.span
                  key={`word-${index}`}
                  initial={animationConfig__heroSection.initial}
                  animate={isAnimate ? animationConfig__heroSection.animate : {}}
                  transition={{ ...transitionAnimation__heroSection, delay: 0.1 * index }}
                >
                  {
                    index !== titleData__heroSection.length - 1 
                    ? label : <em>{label}</em>
                  }
                  <br />
                </motion.span>
              ))}
          </h1>
        </div>
    )
}

export default RootSectionHeader;