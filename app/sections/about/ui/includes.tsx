import DemoCards from "./cards"
import DemoInfo from "./demoInfo"
import styles from "../index.module.scss";

const IncludesAboutSection = () => {
    return (
        <section id="about-section">
      <div className={styles["about-root"]}>
        <div className={styles["about-root__demo"]}>
          <DemoInfo />
          <DemoCards />
        </div>
      </div>
    </section>
    )
}

export default IncludesAboutSection;