import { stagesOfWorkData as data } from "@/configs-and-data/stagesOfWork.cnf";
import styles from "../index.module.scss";
import StagesOfWorkCard from "./card";

const IncludesStagesOfWorkSection = () => {
    return (
        <section id="stages-of-work-section">
            <div className={styles["root-stages"]}>
                <div className={styles["root-stages__title"]}>
                <h2>Этапы нашей работы</h2>
                </div>
                <div className={styles["root-stages__cards"]}>
                    {data.map((item, index) => {
                        return (
                            <StagesOfWorkCard item={item} index={index} key={`f&8f8d-${index}`} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default IncludesStagesOfWorkSection;