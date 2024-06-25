import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../Models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = 'https://localhost:7150/api/Images';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  getImage(id: number): Observable<Image> {
    return this.http.get<Image>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  createImage(formData: FormData): Observable<Image> {
    return this.http.post<Image>(this.apiUrl, formData, {
      headers: this.getHeaders(),
      reportProgress: true, // If needed for progress tracking
    });
  }

  updateImage(id: number, image: Image): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, image, { headers: this.getHeaders() });
  }

  deleteImage(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
}
