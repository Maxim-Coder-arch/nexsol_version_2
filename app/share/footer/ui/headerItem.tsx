import { IFooterData } from "@/configs-and-data/footer.cns";
import styles from "../index.module.scss";

const HeaderItem = ({ item }: { item: IFooterData }) => {
    return (
        <div className={styles["footer-root__header__item"]}>
            <h4>{item.label}</h4>
            <ul>
                {item.links.map((linkItem, index) => {
                    return (
                        <li key={index}>
                            <a href={linkItem.link}>
                                {linkItem.label}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default HeaderItem;