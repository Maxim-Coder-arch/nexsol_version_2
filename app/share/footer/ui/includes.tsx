import AdditionalItems from "./additionalItems";
import HeaderItem from "./headerItem";
import Logotype from "./logotype";
import { footerData as data } from "@/configs-and-data/footer.cns";
import styles from "../index.module.scss";

const IncludesFooterSection = () => {
    return (
        <footer id="footer-section">
            <div className={styles["footer-root"]}>
                <div className={styles["footer-root__header"]}>
                    <Logotype />

                    {data.map((item, index) => <HeaderItem item={item} key={index} />)}
                    
                    <AdditionalItems />

                </div>
                <div className={styles["footer-root__footer"]}>
                    <p>© 2026 NEXSOL. Все права защищены</p>
                    <p>Сделано с ❤️ в NEXSOL</p>
                </div>
            </div>
        </footer>
    )
}

export default IncludesFooterSection;