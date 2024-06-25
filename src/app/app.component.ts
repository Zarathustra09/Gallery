import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthService} from "./Services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {ImageService} from "./Services/image.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AuthService, ImageService]
})
export class AppComponent {
  title = 'Gallery';
}
