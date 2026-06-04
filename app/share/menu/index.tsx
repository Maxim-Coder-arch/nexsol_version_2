"use client";

import { IMenu } from "@/types/menu.type";
import Image from "next/image";
import Link from "next/link";
import VkIcon from "@/public/icons/vk";
import TgIcon from "@/public/icons/tg";
import { dataAdditionalLinks } from "@/data/additionalinks.data";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./index.module.scss";

const Menu = ({ data }: { data: IMenu[] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <>
      <nav className={styles["navigation"]}>
        <div className={styles["menu"]}>
          <div className={styles["logo"]}>
            <Image src={"/images/menu/logo.png"} alt="Nexsol" width={100} height={100} />
          </div>
          <div className={styles["actions"]}>
            <Link href="#">
              <span>Обсудить проект</span>
              <div>
                <VkIcon />
              </div>
            </Link>
            <button onClick={toggleMenu}>
              {Array.from({length: 3}).map((_, index) => {
                return <div key={index} className={`${styles['action-item']} ${styles[`action-item-${index}`]} ${isMenuOpen ? styles[`action-item-active-${index}`] : ""}`}></div>
              })}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && <motion.div 
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{
            ease: "easeInOut"
          }} 
          className={styles["menu-points-fullscreen"]}>
          <div 
          className={styles["menu-points"]}>
            <div className={styles["target-menu"]}>
              <div className={styles["target-menu-social-networks"]}>
                  <a href="https://vk.com/im/convo/-237371792?entrypoint=community_page&tab=all">
                    <VkIcon />
                  </a>
                  <a href="https://web.telegram.org/a/#-2073709033429">
                    <TgIcon />
                  </a>
              </div>
              <div className={styles["target-menu-company-phrase"]}>
                  <h2>NEXSOL</h2>
                  <p>Строим системы. Растим бизнес.</p>
              </div>
            </div>
            <div className={`${styles["menu-items"]} ${styles["template-items"]}`}>
              <span>Меню</span>
              <ul>
                {data.map(item => {
                  return (
                    <li key={item.label} onClick={toggleMenu}>
                      <Link href={item.link}>{item.label}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className={`${styles["additional-items"]} ${styles["template-items"]}`}>
              <span>Дополнительно</span>
              <ul>
                {dataAdditionalLinks.map(item => {
                  return (
                    <li key={item.label} onClick={toggleMenu}>
                      <Link href={item.link}>{item.label}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </motion.div>}
      </AnimatePresence>
    </>
  )
}


export default Menu;