export interface IReview {
  _id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  status: string;
  createdAt: Date;
}