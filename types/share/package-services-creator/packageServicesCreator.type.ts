import { IServiceWithoutPackage } from "@/types/global/serviceWithoutPackage.type";

export interface IPackageServiceCreatorProps {
    isOPen: boolean;
    setIsOPen: React.Dispatch<React.SetStateAction<boolean>>;
    onOrder: (services: IServiceWithoutPackage[], totalPrice: number) => void;
}
