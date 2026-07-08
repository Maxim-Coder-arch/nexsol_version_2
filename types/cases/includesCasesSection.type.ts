import { ICases } from "../cases.type";

export interface IIncludesCasesSection {
    toggleCase: (index: string) => void;
    activeCase: number;
    filteredCase: ICases | null;
}