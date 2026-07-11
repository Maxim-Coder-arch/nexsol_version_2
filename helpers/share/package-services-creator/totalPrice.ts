import { IServiceWithoutPackage } from "@/types/global/serviceWithoutPackage.type";
import { parsePrice } from "./parcePrice";

export const calculateTotalPrice = (services: IServiceWithoutPackage[]): number => {
  let sum = 0;
  
  services.forEach(service => {
    const priceValue = parsePrice(service.price);
    if (priceValue !== null) {
      sum += priceValue;
    }
  });
  
  return sum;
};