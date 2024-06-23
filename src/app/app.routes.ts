import { Routes } from '@angular/router';
import {LoginComponent} from "./Component/login/login.component";
import {RegistrationComponent} from "./Component/registration/registration.component";
import {DashboardComponent} from "./Component/dashboard/dashboard.component";
import {GalleryComponent} from "./Component/gallery/gallery.component";
import {ProfileComponent} from "./Component/profile/profile.component";
import {EditProfileComponent} from "./Component/edit-profile/edit-profile.component";

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'editProfile', component:EditProfileComponent}
];
