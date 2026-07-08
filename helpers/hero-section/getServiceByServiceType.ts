import { pricesWithPackages } from "@/configs-and-data/prices.cnf";
import { IPriceWithPackages } from "@/types/global/servicePackage.type";

const getServicePackageByServiceType = (packageName: string | null): IPriceWithPackages | null => {
    if (!packageName) return null;
    
    const found = pricesWithPackages.find(item => item.packageName === packageName);
    return found || null;
}

export default getServicePackageByServiceType;