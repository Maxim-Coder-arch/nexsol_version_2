import ModalMenu from "./modalMenu";
import NavigationComponent from "./navigation";
import { IIncludesMenu } from "@/types/share/menu/includes.type";

const IncludesMenu = ({ 
    isMenuOpen,
    toggleMenu,
    data,
    dataAdditionalLinks,
 }: IIncludesMenu) => {
    return (
        <>
            <NavigationComponent
                isMenuOpen={isMenuOpen}
                toggleMenu={toggleMenu}
            />

            <ModalMenu
                isMenuOpen={isMenuOpen}
                data={data}
                toggleMenu={toggleMenu}
                dataAdditionalLinks={dataAdditionalLinks}
            />
        </>
    )
}

export default IncludesMenu;