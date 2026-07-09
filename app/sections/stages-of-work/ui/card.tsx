import styles from "../index.module.scss";
import { IStagesOfWorkCard } from "@/types/stages-of-work/stageOfWorkcard.type";

const StagesOfWorkCard = ({ index, item }: IStagesOfWorkCard) => {
    return (
        <div className={styles["root-stages__cards__card"]} key={index}>
            <div className={styles["root-stages__cards__card__header"]}>
                <span>0{index + 1}</span>
            </div>
            <div className={styles["root-stages__cards__card__info"]}>
                <p>{item.description}</p>
                <h3>{item.label}</h3>
            </div>
        </div>
    )
}

export default StagesOfWorkCard;