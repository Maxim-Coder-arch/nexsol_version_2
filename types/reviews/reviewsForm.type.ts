import { IReviewFormActions } from "./reviewsFormActions.type";
import { IReviewFormState } from "./reviewFormState.type";
import { IRatingState } from ".";

export interface IReviewsForm {
  onSubmit: (e: React.FormEvent) => Promise<void>;
  formState: IReviewFormState;
  formActions: IReviewFormActions;
  ratingState: IRatingState;
  isSubmitting: boolean;
}