import { IMenu } from "./menu.type";

export interface IIncludesMenu {
    isMenuOpen: boolean;
    toggleMenu: () => void;
    data: IMenu[];
    dataAdditionalLinks: IMenu[];
}