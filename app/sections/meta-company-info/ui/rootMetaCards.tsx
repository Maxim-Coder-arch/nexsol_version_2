import { metaCompanyData as data } from "@/configs-and-data/metaCompany.cnf";
import styles from "../index.module.scss";

const RootMetaCards = () => {
    return (
        <div className={styles["root-meta"]}>
            {data.map(info => {
            return (
                <div className={styles["root-meta__info"]} key={info.label}>
                <h3>{info.label}</h3>
                <p>{info.value}</p>
                </div>
            )
            })}
        </div>
    )
}

export default RootMetaCards;