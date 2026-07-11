import CloseIcon from "@/public/icons/close";
import { IsOpenType } from "@/types/share/package-services-creator/header.type";
import styles from "../index.module.scss";

const HeaderPackageServicesCreator = ({ setIsOPen }: { setIsOPen: IsOpenType }) => {
    return (
        <>
            <button className={styles["root-package-service-creator__block-creator__close"]} onClick={() => setIsOPen(false)}>
                <CloseIcon />
            </button>
            <div className={styles["root-package-service-creator__block-creator__header"]}>
                <h2>Сделайте свой пакет услуг</h2>
            </div>
        </>
    )
}

export default HeaderPackageServicesCreator;