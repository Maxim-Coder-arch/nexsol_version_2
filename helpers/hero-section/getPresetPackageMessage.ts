import { IPriceWithPackages } from "@/types/global/servicePackage.type";
import generateMessageForBasePackage from "./generateMessageForBasePackage";

const getPresetPackageMessage = (servicePackage: IPriceWithPackages, message: string) => {
    if (servicePackage)
        return generateMessageForBasePackage(servicePackage);
    return message;
};

export default getPresetPackageMessage;