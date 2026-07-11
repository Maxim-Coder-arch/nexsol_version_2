import Image from "next/image";
import styles from "../index.module.scss";
import VkIcon from "@/public/icons/vk";
import { INavigationComponent } from "@/types/share/menu/navigation.type";

const NavigationComponent = ({ toggleMenu, isMenuOpen }: INavigationComponent) => {
    return (
        <nav className={styles["navigation"]}>
            <div className={styles["menu"]}>
                <div className={styles["logo"]}>
                    <Image src={"/images/menu/logo.png"} alt="Nexsol" width={100} height={100} />
                </div>
                <div className={styles["actions"]}>
                    <a href="https://vk.com/im/convo/-237371792?entrypoint=community_page&tab=all">
                    <span>Обсудить проект</span>
                    <div>
                        <VkIcon />
                    </div>
                    </a>
                    <button onClick={toggleMenu}>
                    {Array.from({length: 3}).map((_, index) => {
                        return <div key={index} className={`${styles['action-item']} ${styles[`action-item-${index}`]} ${isMenuOpen ? styles[`action-item-active-${index}`] : ""}`}></div>
                    })}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavigationComponent;