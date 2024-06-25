import { Component } from '@angular/core';
import { GalleryComponent} from "../gallery/gallery.component";
@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [GalleryComponent],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {

}
