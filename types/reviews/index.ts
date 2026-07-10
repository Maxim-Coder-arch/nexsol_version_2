export interface IRatingState {
  rating: number;
  hoverRating: number;
  setRating: (value: number) => void;
  setHoverRating: (value: number) => void;
}