import { dataMenu } from "@/data/menu.data";
import { footerData as data } from "@/configs-and-data/footer.cns";
import styles from "./index.module.scss";

const FooterSection = () => {
    return (
        <footer id="footer-section">
            <div className={styles["footer-root"]}>
                <div className={styles["footer-root__header"]}>
                    <div className={styles["footer-root__header__logotype"]}>
                        <div className={styles["footer-root__header__logotype__logo"]}></div>
                        <h4>Solid Nexus</h4>
                        <p>Строим системы. Растим бизнес.</p>
                    </div>
                    {data.map((item, index) => {
                        return (
                            <div key={index} className={styles["footer-root__header__item"]}>
                                <h4>{item.label}</h4>
                                <ul>
                                    {item.links.map((linkItem, index) => {
                                        return (
                                            <li key={index}>
                                                <a href={`${linkItem.type}${linkItem.link}`}>
                                                    {linkItem.label}
                                                </a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                    <div className={styles["footer-root__header__item"]}>
                        <h4>Мы в соц-сетях</h4>
                        <ul>
                            <li>
                                <a href="https://vk.com/solid_nexus">Сообщество в ВК</a>
                            </li>
                            <li>
                                <a href="https://t.me/solid_nexus">Канал в ТГ</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles["footer-root__footer"]}>
                    <p>© 2026 NEXSOL. Все права защищены</p>
                    <p>Сделано с ❤️ в NEXSOL</p>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection;