import { aboutDataIcons as data } from "@/configs-and-data/aboutSection.cnf";
import styles from "../index.module.scss";

const DemoCards = () => {
    return (
        <div className={styles["about-root__demo__cards"]}>
        {data.map((card, index) => {
            return (
            <div className={styles["about-root__demo__cards__card"]} key={index}>
                <span>{card.icon}</span>
                <p>{card.label}</p>
            </div>
            )
        })}
        </div>
    )
}

export default DemoCards;