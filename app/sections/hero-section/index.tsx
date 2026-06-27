"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { 
  titleData__heroSection, 
  animationConfig__heroSection, 
  transitionAnimation__heroSection
} from "@/configs-and-data/heroSectionConfig";
import styles from "./index.module.scss";
import { pricesWithPackages } from "@/configs-and-data/prices.cnf";
import { useSearchParams } from "next/navigation";
import PackageServiceCreator from "@/app/share/package-servcie-creator";
import BidModal from "@/app/modals/bid-modal";

const HeroSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [isAnimate, setIsAnimate] = useState(false);
  const [servicePackage, setServicePackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPackageServiceCreatorOpen, setIsPackageServiceCreatorOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const searchParams = useSearchParams();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimate(true);
    }, 1700);

    return () => clearTimeout(timeout);
  }, []);

  const getServicePackageByServiceType = (packageName?: string) => {
    if (packageName) {
      return pricesWithPackages.find(item => item.packageName === packageName);
    }
  }

  const generateServicesMessage = (services: any[], totalPrice: number) => {
    const servicesList = services.map(s => `- ${s.label} (${s.price})`).join('\n');
    return `Здравствуйте! Хочу заказать индивидуальный пакет услуг:

${servicesList}

Общая стоимость: ${totalPrice.toLocaleString('ru-RU')} ₽

Пожалуйста, свяжитесь со мной для обсуждения деталей.`;
  };

  const handleCustomPackageOrder = (services: any[], totalPrice: number) => {
    const orderMessage = generateServicesMessage(services, totalPrice);
    setMessage(orderMessage);
    
    setTimeout(() => {
      const formElement = document.querySelector(`.${styles["root-hero-section__bid-form"]}`);
      formElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

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
        setModalData({
          name,
          email,
          contact,
          message,
        });
        setName(''); 
        setEmail(''); 
        setContact(''); 
        setMessage('');
        setIsModalOpen(true);
      }
    } catch {}
  } 

  useEffect(() => {
    const searchParamsData = () => {
      const serviceType = searchParams.get('order-type');
      setServicePackage(getServicePackageByServiceType(serviceType));
    }

    searchParamsData();
  }, [searchParams]);

  const getPresetPackageMessage = () => {
    if (servicePackage) {
      return `Здравствуйте! Меня заинтересовал пакет "${servicePackage.title}".

Услуги в пакете:
${servicePackage.services.map(s => `- ${s}`).join('\n')}

Цена: ${servicePackage.price} (скидка ${servicePackage.discount}%)

Пожалуйста, свяжитесь со мной для обсуждения деталей.`;
    }
    return message;
  };

  const showEditableMessage = !servicePackage && !message.includes("индивидуальный пакет услуг");

  const onCloseModal = () => {
    setIsModalOpen(false);
    setModalData({});
  }

  return (
    <section id="hero-section">
      {isModalOpen && <BidModal name={modalData.name} email={modalData.email} contact={modalData.contact} message={modalData.message} onClose={onCloseModal} />}
      <PackageServiceCreator 
        isOPen={isPackageServiceCreatorOpen} 
        setIsOPen={setIsPackageServiceCreatorOpen}
        onOrder={handleCustomPackageOrder}
      />
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
            <motion.button 
              initial={animationConfig__heroSection.initial}
              animate={isAnimate ? animationConfig__heroSection.animate : {}}
              transition={{...transitionAnimation__heroSection, delay: .7}}
              onClick={() => setIsPackageServiceCreatorOpen(true)}
            >Создать свой пакет услуг</motion.button>
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
                type="text" placeholder="Ваше имя *" value={name} onChange={(e) => setName(e.target.value)} required  
              />
              
              <motion.input
                initial={animationConfig__heroSection.initial}
                animate={isAnimate ? animationConfig__heroSection.animate : {}}
                transition={{...transitionAnimation__heroSection, delay: .9}}
                type="email" placeholder="Ваша почта *" value={email} onChange={(e) => setEmail(e.target.value)} required 
              />
              
              <motion.input 
                initial={animationConfig__heroSection.initial}
                animate={isAnimate ? animationConfig__heroSection.animate : {}}
                transition={{...transitionAnimation__heroSection, delay: 1}}
                type="text" placeholder="Телефон или ссылка на соцсеть *" value={contact} onChange={(e) => setContact(e.target.value)} required  
              />
              
              <motion.textarea 
                initial={animationConfig__heroSection.initial}
                animate={isAnimate ? animationConfig__heroSection.animate : {}}
                transition={{...transitionAnimation__heroSection, delay: 1.1}}
                placeholder="Расскажите о вашем проекте (необязательно)" 
                value={servicePackage ? getPresetPackageMessage() : message} 
                onChange={(e) => setMessage(e.target.value)}
                readOnly={!showEditableMessage}
                className={!showEditableMessage ? styles.readOnly : ""}
              />
              
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
                className={styles["root-hero-section__bid-form__bid__checkbox"]}
              >
                <input type="checkbox" required />
                <p>я соглашаюсь на <a href="/pages/privacy" target="_blank">обработку персональных данных</a></p>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;