'use client';

import { casesData } from "@/configs-and-data/cases.data";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./index.module.scss";

const CasesSection = () => {
  const [activeCase, setActiveCase] = useState(1);
  const toggleCase = (index: string) => setActiveCase(parseInt(index));
  const filteredCase = casesData.find(item => item._id === activeCase.toString());

  return (
    <section id="cases-section">
      <div className={styles["root-cases"]}>
        <div className={styles["root-cases__title"]}>
           <h2>Популярные работы</h2>
        </div>
        <div className={styles["root-cases__monitor"]}>
          <div className={styles["root-cases__monitor__demo"]}>
            <div className={styles["root-cases__monitor__demo__list-of-names"]}>
              <ol>
                {casesData.map(item => {
                  return (
                    <li 
                      key={item._id} 
                      onClick={() => toggleCase(item._id)}
                      className={
                        activeCase === parseInt(item._id) ? styles["active"] : ""
                      }
                    >
                      {item.title}
                    </li>
                  )
                })}
              </ol>
            </div>
            <div className={styles["root-cases__monitor__demo__case-details"]}>
                {filteredCase && (
                  <>
                    <AnimatePresence>
                      <motion.div 
                        key={activeCase}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: .5 }}
                        className={styles["root-cases__monitor__demo__case-details__image"]}>
                        <Image 
                          src={filteredCase.banner} 
                          alt={filteredCase.title} 
                          width={400}
                          height={300} />
                      </motion.div>
                    </AnimatePresence>
                    <div
                    className={styles["root-cases__monitor__demo__case-details__content"]}>
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={filteredCase.title}
                        transition={{ duration: .5, ease: "easeOut" }}
                      >{filteredCase.title}</motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={filteredCase._id}
                        transition={{ duration: .5, ease: "easeOut", delay: .1 }}
                      >{filteredCase.description}</motion.p>
                      <motion.a 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={filteredCase.description}
                        transition={{ duration: .5, ease: "easeOut", delay: .2 }}
                      href={filteredCase.link}>Перейти</motion.a>
                    </div>
                    <div className={styles["root-cases__monitor__demo__case-details__meta"]}>
                      <ol>
                        {filteredCase.additionalInfo.map((additional, index) => {
                          return (
                            <motion.li 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: .5, ease: "easeOut", delay: index * .1 }}
                            key={additional.value}>
                              <h4>{additional.label}</h4>
                              <span>-</span>
                              <p>{additional.value}</p>
                            </motion.li>
                          )
                        })}
                      </ol>
                    </div>
                  </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CasesSection;