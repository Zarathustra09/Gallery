import { Component, OnInit } from '@angular/core';
import {ImageService} from "../../Services/image.service";
import {Image} from "../../Models/image.model";
import {DatePipe, NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
    DatePipe
  ],
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: Image[] = [];

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.imageService.getImages().subscribe(
      (data: Image[]) => {
        this.images = data;
      },
      error => {
        console.error('Error fetching images', error);
      }
    );
  }
}
