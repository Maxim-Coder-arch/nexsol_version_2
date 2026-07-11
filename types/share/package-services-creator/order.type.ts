import { IServiceWithoutPackage } from "@/types/global/serviceWithoutPackage.type";

export interface IOrder {
    totalPrice: number;
    handleOrder: () => void;
    selectedServices: IServiceWithoutPackage[];
}