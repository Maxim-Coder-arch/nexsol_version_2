'use client';

import { useState } from "react";
import IncludesFaqSection from "./ui/includes";

const FaqSection = () => {
    const [activeQuestion, setActiveQuestion] = useState(0);

    return <IncludesFaqSection
        activeQuestion={activeQuestion}
        setActiveQuestion={setActiveQuestion}
    />
}

export default FaqSection;