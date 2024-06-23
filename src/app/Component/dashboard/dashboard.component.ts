import { Component } from '@angular/core';
import { GalleryComponent} from "../gallery/gallery.component";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [GalleryComponent,AppComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
