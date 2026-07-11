import { MotionValue } from "framer-motion";
import { RefObject } from "react";

export interface IIncludesRunningBanner {
    containerRef: RefObject<HTMLDivElement | null>;
    baseX: MotionValue<number>;
}