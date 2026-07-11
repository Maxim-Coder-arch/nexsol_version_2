import styles from "../index.module.scss";
import { IOrder } from "@/types/share/package-services-creator/order.type";

const Order = ({ 
    totalPrice,
    handleOrder,
    selectedServices,
 }: IOrder) => {
    return (
        <>
            <div className={styles["root-package-service-creator__block-creator__order"]}>
                <button onClick={handleOrder} disabled={selectedServices.length === 0}>
                    Заказать
                </button>
            </div>
            <div className={styles["root-package-service-creator__block-creator__footer"]}>
                <p>Скорее заказывайте и мы сделаем вам скидку</p>
                <h4>От {totalPrice.toLocaleString('ru-RU')} ₽</h4>
            </div>
        </>
    )
}

export default Order;