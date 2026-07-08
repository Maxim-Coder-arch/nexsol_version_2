export interface IPriceWithPackages {
    packageName: string;
    title: string;
    services: string[],
    discount: number;
    price: string;
}