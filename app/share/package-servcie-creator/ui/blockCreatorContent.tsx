import { IBlockCreatorContent } from "@/types/share/package-services-creator/blockCreatorContent.type";
import styles from "../index.module.scss";

const BlockCreatorContent = ({ 
    handleSelectedServices,
    price,
    isSelected,
 }: IBlockCreatorContent) => {
    return (
        <div 
            onClick={() => handleSelectedServices(price._id.toString())}
            className={`${styles["root-package-service-creator__block-creator__content__item"]} 
                ${isSelected ? styles["selected-item"] : ''}`}
        >
            <p>{price.label}</p>
            <span>{price.price}</span>
        </div>
    )
}

export default BlockCreatorContent;