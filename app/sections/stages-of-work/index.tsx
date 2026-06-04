import { stagesOfWorkData as data } from "@/configs-and-data/stagesOfWork.cnf";
import styles from "./index.module.scss";

const StagesOfWorkSection = () => {
  return (
    <section id="stages-of-work-section">
      <div className={styles["root-stages"]}>
        <div className={styles["root-stages__title"]}>
          <h2>Этапы нашей работы</h2>
        </div>
        <div className={styles["root-stages__cards"]}>
          {data.map((item, index) => {
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
          })}
        </div>
      </div>
    </section>
  )
}

export default StagesOfWorkSection;