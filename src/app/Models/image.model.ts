export interface Image {
  id: number;
  userId: number;
  filename: string;
  description: string;
  createdAt: Date;
  imageData: File | null; // Use File type for image file upload
}
