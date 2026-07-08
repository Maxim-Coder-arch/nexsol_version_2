'use client';

import { casesData } from "@/configs-and-data/cases.data";
import { useState } from "react";
import IncludesCasesSection from "./ui/includes";

const CasesSection = () => {
  const [activeCase, setActiveCase] = useState(1);
  const toggleCase = (index: string) => setActiveCase(parseInt(index));
  const filteredCase = casesData.find(item => item._id === activeCase.toString()) || null;

  return (
    <IncludesCasesSection
      toggleCase={toggleCase}
      activeCase={activeCase}
      filteredCase={filteredCase}
    />
  )
}

export default CasesSection;