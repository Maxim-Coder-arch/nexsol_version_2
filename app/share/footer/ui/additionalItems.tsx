import styles from "../index.module.scss";

const AdditionalItems = () => {
    return (
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
    )
}

export default AdditionalItems;