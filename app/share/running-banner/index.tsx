'use client';

import { animate, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import IncludesRunningBanner from "./ui/includes";

const RunningBanner = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const baseX = useMotionValue(0);
    useEffect(() => {
        if (!containerRef.current) return;
        const containerWidth = containerRef.current.scrollWidth / 2;
        const animateX = animate(baseX, -containerWidth, {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop"
        });
        return () => animateX.stop();
    }, [baseX]);

    return <IncludesRunningBanner
        containerRef={containerRef}
        baseX={baseX}
    />
}

export default RunningBanner;