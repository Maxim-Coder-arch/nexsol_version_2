import styles from "../index.module.scss";

const Logotype = () => {
    return (
        <div className={styles["footer-root__header__logotype"]}>
            <div className={styles["footer-root__header__logotype__logo"]}></div>
            <h4>Solid Nexus</h4>
            <p>Строим системы. Растим бизнес.</p>
        </div>
    )
}

export default Logotype;