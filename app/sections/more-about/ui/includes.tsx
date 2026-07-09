import styles from "../index.module.scss";
import MoreAboutCards from "./cards";

const IncludesMoreAboutSection = () => {
    return (
        <section id="more-about-section">
            <div className={styles["more-about"]}>
                <MoreAboutCards />
            </div>
        </section>
    )
}

export default IncludesMoreAboutSection;