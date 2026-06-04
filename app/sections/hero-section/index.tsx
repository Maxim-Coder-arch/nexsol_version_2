"use client";

import { motion } from "framer-motion";
import RunningBanner from "@/app/share/running-banner";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { 
  titleData__heroSection, 
  animationConfig__heroSection, 
  transitionAnimation__heroSection
} from "@/configs-and-data/heroSectionConfig";
import styles from "./index.module.scss";



const HeroSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimate(true);
    }, 1700);

    return () => clearTimeout(timeout);
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, contact, message
        })
      });

      if (response.ok) {
        setName(''); 
        setEmail(''); 
        setContact(''); 
        setMessage('');
      }
    } catch {}
  } 
  


  return (
    <section id="hero-section">
      <div className={styles["root-hero-section"]}>
        <div className={styles["root-hero-section__header"]}>
          <h1>
             {titleData__heroSection.map((label, index) => (
                <motion.span
                  key={`word-${index}`}
                  initial={animationConfig__heroSection.initial}
                  animate={isAnimate ? animationConfig__heroSection.animate : {}}
                  transition={{ ...transitionAnimation__heroSection, delay: 0.1 * index }}
                >
                  {
                    index !== titleData__heroSection.length - 1 
                    ? label : <em>{label}</em>
                  }
                  <br />
                </motion.span>
              ))}
          </h1>
        </div>
        <div className={styles["root-hero-section__bid-form"]}>
          <div className={styles["root-hero-section__bid-form__content"]}>
            <motion.h2
              initial={animationConfig__heroSection.initial}
              animate={isAnimate ? animationConfig__heroSection.animate : {}}
              transition={{...transitionAnimation__heroSection, delay: .3}}
            >NEXSOL — это разработка сайтов, аналитика, CRM и реклама для бизнеса.</motion.h2>
            <motion.p
              initial={animationConfig__heroSection.initial}
              animate={isAnimate ? animationConfig__heroSection.animate : {}}
              transition={{...transitionAnimation__heroSection, delay: .5}}
            >Мы строим систему, которая работает 24/7 и реально увеличивает продажи.</motion.p>
          </div>
          <div className={styles["root-hero-section__bid-form__bid"]}>
            <motion.h3
            initial={animationConfig__heroSection.initial}
            animate={isAnimate ? animationConfig__heroSection.animate : {}}
            transition={{...transitionAnimation__heroSection, delay: .7}}
            >Оставить заявку</motion.h3>

              <form onSubmit={handleSubmit}>
                <motion.input 
                initial={animationConfig__heroSection.initial}
                animate={isAnimate ? animationConfig__heroSection.animate : {}}
                transition={{...transitionAnimation__heroSection, delay: .8}}
                type="text" placeholder="Ваше имя *" value={name} onChange={(e) => setName(e.target.value)} required  />
                
                <motion.input
                initial={animationConfig__heroSection.initial}
                animate={isAnimate ? animationConfig__heroSection.animate : {}}
                transition={{...transitionAnimation__heroSection, delay: .9}}
                type="email" placeholder="Ваша почта *" value={email} onChange={(e) => setEmail(e.target.value)} required />
                
                <motion.input 
                initial={animationConfig__heroSection.initial}
                animate={isAnimate ? animationConfig__heroSection.animate : {}}
                transition={{...transitionAnimation__heroSection, delay: 1}}
                type="text" placeholder="Телефон или ссылка на соцсеть *" value={contact} onChange={(e) => setContact(e.target.value)} required  />
                
                <motion.textarea 
                initial={animationConfig__heroSection.initial}
                animate={isAnimate ? animationConfig__heroSection.animate : {}}
                transition={{...transitionAnimation__heroSection, delay: 1.1}}
                placeholder="Расскажите о вашем проекте (необязательно)" value={message} onChange={(e) => setMessage(e.target.value)} />
                
                <motion.button
                initial={animationConfig__heroSection.initial}
                animate={isAnimate ? animationConfig__heroSection.animate : {}}
                transition={{...transitionAnimation__heroSection, delay: 1.2}}
                type="submit"
                >Отправить</motion.button>
                
                <motion.div 
                initial={animationConfig__heroSection.initial}
                animate={isAnimate ? animationConfig__heroSection.animate : {}}
                transition={{...transitionAnimation__heroSection, delay: 1.3}}
                className={styles["root-hero-section__bid-form__bid__checkbox"]}>
                  <input type="checkbox" name="" id="" />
                  <p>я соглашаюсь на <a>обработку персональных данных</a></p>
                </motion.div>
              </form>

          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;