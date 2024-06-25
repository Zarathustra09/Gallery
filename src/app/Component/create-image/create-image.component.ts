import { Component } from '@angular/core';
import { ImageService } from '../../Services/image.service';
import { Router } from '@angular/router';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-create-image',
  templateUrl: './create-image.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./create-image.component.css']
})
export class CreateImageComponent {
  userId: number = 0;
  filename: string = '';
  description: string = '';
  imageData: File | null = null; // Updated to use File type for image data

  constructor(private imageService: ImageService, private router: Router) {}

  onFileChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.imageData = inputElement.files[0];
    }
  }

  onSubmit() {
    if (!this.imageData) {
      console.error('Image file is required.');
      return;
    }

    const formData = new FormData();
    formData.append('userId', this.userId.toString());
    formData.append('filename', this.filename);
    formData.append('description', this.description);
    formData.append('Image_Data', this.imageData, this.imageData.name); // Append image file with filename as 'Image_Data'
    formData.append('imageFile', this.imageData, this.imageData.name); // Append image file with filename for imageFile

    this.imageService.createImage(formData).subscribe(
      (response) => {
        console.log('Image created successfully:', response);
        this.router.navigate(['/images']); // Redirect to images list after successful creation
      },
      (error) => {
        console.error('Error creating image:', error);
      }
    );
  }
}
