import Link from "next/link";
import styles from "../index.module.scss";
import { IPriceWithPackageCard } from "@/types/prices/priceWithPackageCard.type";

const PriceWithPackageCard = ({ packageService }: IPriceWithPackageCard) => {
    return (
        <div className={styles["root-prices__with-packages__package"]}>
            <div className={styles["root-prices__with-packages__package__separator"]}>    
                <div className={styles["root-prices__with-packages__package__title"]}>
                    <h4>{packageService.title}</h4>
                </div>
                <div className={styles["root-prices__with-packages__package__services"]}>
                    {packageService.services.map((service, index) => {
                        return (
                            <div key={index} className={styles["root-prices__with-packages__package__services__service"]}>
                                <p>{service}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles["root-prices__with-packages__package__price"]}>
                <p>{packageService.price}<sup>-{packageService.discount}%</sup></p>
                <Link href={`/?order-type=${packageService.packageName}`}>Заказать</Link>
            </div>
        </div>
    )
}

export default PriceWithPackageCard;