import BlockCreatorContent from "./blockCreatorContent";
import HeaderPackageServicesCreator from "./header";
import Order from "./order";
import { IIncludesPackageServiceCreator } from "@/types/share/package-services-creator/includesPackaService.type";
import styles from "../index.module.scss";

const IncludesPackageServiceCreator = ({ 
    setIsOPen,
    selectedServices,
    handleSelectedServices,
    totalPrice,
    handleOrder,
    data
 }: IIncludesPackageServiceCreator) => {
    return (
        <div className={styles["root-package-service-creator"]}>
            <div className={styles["root-package-service-creator__block-creator"]}>
                <HeaderPackageServicesCreator setIsOPen={setIsOPen} />
                <div className={styles["root-package-service-creator__block-creator__content"]}>
                    {data.map((price, index) => {
                        const isSelected = selectedServices.some(s => s._id === price._id);
                        return (
                            <BlockCreatorContent
                                key={index}
                                handleSelectedServices={handleSelectedServices}
                                price={price}
                                isSelected={isSelected}
                            />
                        )
                    })}
                </div>
                <Order
                    totalPrice={totalPrice}
                    handleOrder={handleOrder}
                    selectedServices={selectedServices}
                />
            </div>
        </div>
    )
}

export default IncludesPackageServiceCreator;