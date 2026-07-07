export interface ICases {
  _id: string;
  title: string;
  description: string;
  banner: string;
  link?: string;
  additionalInfo: { label: string, value: string }[];
}