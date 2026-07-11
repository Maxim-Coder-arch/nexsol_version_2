"use client";

import { IMenu } from "@/types/share/menu/menu.type";
import { dataAdditionalLinks } from "@/data/additionalinks.data";
import { useState } from "react";
import IncludesMenu from "./ui/includes";

const Menu = ({ data }: { data: IMenu[] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return <IncludesMenu
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            data={data}
            dataAdditionalLinks={dataAdditionalLinks}
         />
}


export default Menu;