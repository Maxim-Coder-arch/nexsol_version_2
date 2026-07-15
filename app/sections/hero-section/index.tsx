"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import HeroSectionIncludes from "./ui/includes";
import generateServicesMessage from "@/helpers/hero-section/generateServicesMessage";
import getServicePackageByServiceType from "@/helpers/hero-section/getServiceByServiceType";
import { IPriceWithPackages } from "@/types/global/servicePackage.type";
import { IServiceWithoutPackage } from "@/types/global/serviceWithoutPackage.type";

const HeroSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [isAnimate, setIsAnimate] = useState(false);
  const [servicePackage, setServicePackage] = useState<IPriceWithPackages | null>(null);
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [isPackageServiceCreatorOpen, setIsPackageServiceCreatorOpen] = useState(false);
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimate(true);
    }, 1700);

    return () => clearTimeout(timeout);
  }, []);
  

  const handleCustomPackageOrder = (services: IServiceWithoutPackage[], totalPrice: number) => {
    const orderMessage = generateServicesMessage(services, totalPrice);
    setMessage(orderMessage);
    
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
        setShowMessageBox(true);
        setName(''); 
        setEmail(''); 
        setContact(''); 
        setMessage('');
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

  const handleClear = () => {
        setName("");
        setEmail("");
        setContact("");
        setMessage("");
    }

  const showEditableMessage = !servicePackage && !message.includes("индивидуальный пакет услуг");

  return (
    <HeroSectionIncludes
      isPackageServiceCreatorOpen={isPackageServiceCreatorOpen}
      setIsPackageServiceCreatorOpen={setIsPackageServiceCreatorOpen}
      handleCustomPackageOrder={handleCustomPackageOrder}
      showMessageBox={showMessageBox}
      isAnimate={isAnimate}
      handleSubmit={handleSubmit}
      name={name}
      email={email}
      contact={contact}
      message={message}
      showEditableMessage={showEditableMessage}
      servicePackage={servicePackage}
      setShowMessageBox={setShowMessageBox}
      setName={setName}
      setEmail={setEmail}
      setContact={setContact}
      setMessage={setMessage}
      formRef={formRef}
      handleClear={handleClear}
    />
  );
}

export default HeroSection;