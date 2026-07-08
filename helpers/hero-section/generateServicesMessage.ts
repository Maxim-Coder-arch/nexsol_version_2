import { IServiceWithoutPackage } from "@/types/global/serviceWithOutPackage.type";
import generateMessage from "./orderMessage";

const generateServicesMessage = (services: IServiceWithoutPackage[], totalPrice: number) => {
    const servicesList = services.map(s => `- ${s.label} (${s.price})`).join('\n');
    return generateMessage(servicesList, totalPrice);
};

export default generateServicesMessage;