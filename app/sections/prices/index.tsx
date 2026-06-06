import Link from "next/link";
import styles from "./index.module.scss";
import { pricesData, pricesWithPackages } from "@/configs-and-data/prices.cnf";

const PricesSection = () => {
    return (
        <section id="prices-section">
            <div className={styles["root-prices"]}>
                <div className={styles["root-prices__title"]}>
                    <h3>Цены</h3>
                </div>
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
                <div className={styles["root-prices__with-packages"]}>
                    {pricesWithPackages.map((packageServices, index) => {
                        return (
                            <div key={index} className={styles["root-prices__with-packages__package"]}>
                                <div className={styles["root-prices__with-packages__package__separator"]}>    
                                    <div className={styles["root-prices__with-packages__package__title"]}>
                                        <h4>{packageServices.title}</h4>
                                    </div>
                                    <div className={styles["root-prices__with-packages__package__services"]}>
                                        {packageServices.services.map((service, index) => {
                                            return (
                                                <div key={index} className={styles["root-prices__with-packages__package__services__service"]}>
                                                    <p>{service}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className={styles["root-prices__with-packages__package__price"]}>
                                    <p>{packageServices.price}<sup>-{packageServices.discount}%</sup></p>
                                    <Link href={`/?order-type=${packageServices.packageName}`}>Заказать</Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default PricesSection;