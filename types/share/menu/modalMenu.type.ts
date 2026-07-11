import { IMenu } from "./menu.type";

export interface IModalMenu {
    isMenuOpen: boolean;
    data: IMenu[];
    toggleMenu: () => void;
    dataAdditionalLinks: IMenu[];
}