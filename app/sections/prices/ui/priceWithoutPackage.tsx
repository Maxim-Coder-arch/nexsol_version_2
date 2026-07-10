import { pricesData } from "@/configs-and-data/prices.cnf"
import styles from "../index.module.scss";

const PriceWithoutPackage = () => {
    return (
        <div className={styles["root-prices__without-packages"]}>
            {pricesData.map((price, index) => {
                return (
                    <div key={index} className={styles["root-prices__without-packages__block"]}>
                        <h4>{price.label} -</h4>
                        <p>{price.price}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default PriceWithoutPackage;