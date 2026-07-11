import { IPriceData } from "@/configs-and-data/prices.cnf";

export interface IBlockCreatorContent {
    handleSelectedServices: (id: string) => void;
    price: IPriceData;
    isSelected: boolean;
}