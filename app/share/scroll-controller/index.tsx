'use client';

import { useEffect, useState } from "react";
import IncludesScrollController from "./ui/includes";

const ScrollController = () => {
    const [showScrollController, setShowScrollController] = useState(false);
    useEffect(() => {
        const windowScrollListener = () => {
            const scrolly = window.scrollY;
            if (scrolly > 500) setShowScrollController(true)
            else setShowScrollController(false);
        }
        window.addEventListener("scroll", windowScrollListener);

        return () => window.removeEventListener("scroll", windowScrollListener);
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };

    return (
        showScrollController && <IncludesScrollController scrollTop={scrollTop} />
    )
}

export default ScrollController;