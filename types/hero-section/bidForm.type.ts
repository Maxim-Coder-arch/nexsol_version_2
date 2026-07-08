import { Dispatch, SetStateAction } from "react";
import { IPriceWithPackages } from "../global/servicePackage.type";

export interface IBidForm {
    showMessageBox: boolean;
    isAnimate: boolean;
    handleSubmit: (event: React.FormEvent) => Promise<void>;
    name: string;
    email: string;
    contact: string;
    message: string;
    showEditableMessage: boolean;
    servicePackage: IPriceWithPackages | null;
    setShowMessageBox: Dispatch<SetStateAction<boolean>>;
    setName: (parameter: string) => void;
    setEmail: (parameter: string) => void;
    setContact: (parameter: string) => void;
    setMessage: (parameter: string) => void;
    formRef: React.RefObject<HTMLDivElement | null>;
}