'use client';

import { motion } from "framer-motion";
import { pricesData as data } from "@/configs-and-data/prices.cnf";
import { useMemo, useState } from "react";
import styles from "./index.module.scss";
import CloseIcon from "@/public/icons/close";

const parsePrice = (priceStr: string): number | null => {
    if (!priceStr) return null;
    
    const match = priceStr.match(/(\d[\d\s]*)/);
    if (!match) return null;
    
    const numberStr = match[1].replace(/\s/g, '');
    const number = parseInt(numberStr, 10);
    
    return isNaN(number) ? null : number;
};

interface PackageServiceCreatorProps {
    isOPen: boolean;
    setIsOPen: React.Dispatch<React.SetStateAction<boolean>>;
    onOrder: (services: any[], totalPrice: number) => void; // ← новый пропс
}

const PackageServiceCreator = ({ isOPen, setIsOPen, onOrder }: PackageServiceCreatorProps) => {
    const [selectedServices, setSelectedServices] = useState<any[]>([]);

    const handleSelectedServices = (id: string) => {
        const item = data.find(item => item._id.toString() === id);
        
        if (item) {
            setSelectedServices(prev => {
                const exists = prev.some(service => service._id === item._id);
                if (!exists) {
                    return [...prev, item];
                } else {
                    return prev.filter(service => service._id !== item._id);
                }
            });
        }
    }

    const totalPrice = useMemo(() => {
        let sum = 0;
        
        selectedServices.forEach(service => {
            const priceValue = parsePrice(service.price);
            if (priceValue !== null) {
                sum += priceValue;
            }
        });
        
        return sum;
    }, [selectedServices]);

    const handleOrder = () => {
        if (selectedServices.length === 0) return;
        onOrder(selectedServices, totalPrice);
        setIsOPen(false); // закрываем окно
    };

    return (
        isOPen && <div className={styles["root-package-service-creator"]}>
            <div className={styles["root-package-service-creator__block-creator"]}>
                <button className={styles["root-package-service-creator__block-creator__close"]} onClick={() => setIsOPen(false)}>
                    <CloseIcon />
                </button>
                <div className={styles["root-package-service-creator__block-creator__header"]}>
                    <h2>Сделайте свой пакет услуг</h2>
                </div>
                <div className={styles["root-package-service-creator__block-creator__content"]}>
                    {data.map((price, index) => {
                        const isSelected = selectedServices.some(s => s._id === price._id);
                        return (
                            <div 
                                onClick={() => handleSelectedServices(price._id.toString())}
                                key={price._id || index}
                                className={`${styles["root-package-service-creator__block-creator__content__item"]} 
                                    ${isSelected ? styles["selected-item"] : ''}`}
                            >
                                <p>{price.label}</p>
                            </div>
                        )
                    })}
                </div>
                <div className={styles["root-package-service-creator__block-creator__order"]}>
                    <button onClick={handleOrder} disabled={selectedServices.length === 0}>
                        Заказать
                    </button>
                </div>
                <div className={styles["root-package-service-creator__block-creator__footer"]}>
                    <p>Скорее заказывайте и мы сделаем вам скидку</p>
                    <h4>От {totalPrice.toLocaleString('ru-RU')} ₽</h4>
                </div>
            </div>
        </div>
    )
}

export default PackageServiceCreator;