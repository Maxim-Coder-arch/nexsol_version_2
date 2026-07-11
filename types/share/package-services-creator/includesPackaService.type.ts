import { IPriceData } from "@/configs-and-data/prices.cnf";
import { IServiceWithoutPackage } from "@/types/global/serviceWithoutPackage.type";

export interface IIncludesPackageServiceCreator {
    setIsOPen: React.Dispatch<React.SetStateAction<boolean>>;
    selectedServices: IServiceWithoutPackage[];
    handleSelectedServices: (id: string) => void;
    totalPrice: number;
    handleOrder: () => void;
    data: IPriceData[];
}