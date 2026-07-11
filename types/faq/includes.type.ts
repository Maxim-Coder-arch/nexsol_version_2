import { SetStateAction } from "react";

export interface IIncludesFaqSection {
    setActiveQuestion: (value: SetStateAction<number>) => void;
    activeQuestion: number;
}