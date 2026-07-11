import { SetStateAction } from "react";
import { IFaq } from "./faq.type";

export interface IQuestionCard {
    question: IFaq;
    index: number;
    setActiveQuestion: (value: SetStateAction<number>) => void;
    activeQuestion: number;
}