import { aboutDataIcons as data } from "@/configs-and-data/aboutSection.cnf";
import styles from "./index.module.scss";

const AboutSection = () => {
  return (
    <section id="about-section">
      <div className={styles["about-root"]}>
        <div className={styles["about-root__demo"]}>
          <div className={styles["about-root__demo__info"]}>
            <h3>О нас</h3>
            <p><strong>В малом бизнесе слишком много хаоса.</strong> <br /> Вы разрываетесь между сайтом, клиентами и попытками настроить рекламу. А результат всё равно непредсказуем?</p>
          </div>
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
        </div>
      </div>
    </section>
  )
}

export default AboutSection;