import { pricesWithPackages } from "@/configs-and-data/prices.cnf";
import PriceWithoutPackage from "./priceWithoutPackage";
import PriceWithPackageCard from "./priceWithPackageCard";
import styles from "../index.module.scss";

const IncludesPricesSection = () => {
    return (
        <section id="prices-section">
            <div className={styles["root-prices"]}>
                <div className={styles["root-prices__title"]}>
                    <h3>Цены</h3>
                </div>

                <PriceWithoutPackage />

                <div className={styles["root-prices__with-packages"]}>
                    {pricesWithPackages.map((packageService, index) => <PriceWithPackageCard packageService={packageService} key={index} />)}
                </div>
            </div>
        </section>
    )
}

export default IncludesPricesSection;