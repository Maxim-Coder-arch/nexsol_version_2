'use client';

import { useMemo, useState } from "react";
import { IServiceWithoutPackage } from "@/types/global/serviceWithoutPackage.type";
import IncludesPackageServiceCreator from "./ui/includes";
import { pricesData as data } from "@/configs-and-data/prices.cnf";
import { calculateTotalPrice } from "@/helpers/share/package-services-creator/totalPrice";
import { IPackageServiceCreatorProps } from "@/types/share/package-services-creator/packageServicesCreator.type";

const PackageServiceCreator = ({ isOPen, setIsOPen, onOrder }: IPackageServiceCreatorProps) => {
    const [selectedServices, setSelectedServices] = useState<IServiceWithoutPackage[]>([]);

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
        return calculateTotalPrice(selectedServices);
    }, [selectedServices]);


    const handleOrder = () => {
        if (selectedServices.length === 0) return;
        onOrder(selectedServices, totalPrice);
        setIsOPen(false);
    };

    return isOPen && <IncludesPackageServiceCreator
        setIsOPen={setIsOPen}
        selectedServices={selectedServices}
        handleSelectedServices={handleSelectedServices}
        totalPrice={totalPrice}
        handleOrder={handleOrder}
        data={data}
    />
}

export default PackageServiceCreator;