import { IRatingState } from ".";
import { IReview } from "./reviews.type";
import { IFormActions } from "./formActions.type";
import { IFormState } from "./formState.type";
import { ISubmitMessageType } from "./submitMessage.type";

export interface IIncludesReviewsSection {
    reviews: IReview[];
    submitMessage: ISubmitMessageType;
    showMessageBox: boolean;
    setShowMessageBox: React.Dispatch<React.SetStateAction<boolean>>;
    handleSubmit: (event: React.FormEvent<Element>) => Promise<void>;
    formState: IFormState;
    formActions: IFormActions;
    ratingState: IRatingState;
    isSubmitting: boolean;
}