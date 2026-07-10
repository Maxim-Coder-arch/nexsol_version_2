export interface IRatingState {
    rating: number;
    hoverRating: number;
    setRating: React.Dispatch<React.SetStateAction<number>>;
    setHoverRating: React.Dispatch<React.SetStateAction<number>>;
}