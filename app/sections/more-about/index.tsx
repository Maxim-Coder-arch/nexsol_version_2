import Image from "next/image";
import styles from "./index.module.scss";
import { moreAboutData as data } from "@/configs-and-data/moreAbout.cnf";

const MoreAboutSection = () => {
  return (
    <section id="more-about-section">
      <div className={styles["more-about"]}>
        {data.map((item, index) => {
          return (
            <div className={styles["more-about__card"]} key={index}>
              <div className={styles["more-about__card__bg-image"]}>
                <Image src={item.image} alt={item.title} width={500} height={400} />
              </div>
              <div className={styles["more-about__card__info"]}>
                <p>{item.description}</p>
                <h3>{item.title}</h3>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default MoreAboutSection;