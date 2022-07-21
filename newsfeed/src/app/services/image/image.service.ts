import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Image } from 'src/app/models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  // image url
  private imageUrl = `${environment.baseUrl}/images`

  constructor(private http: HttpClient) { }
  // method to get all images
  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.imageUrl)
  }
}
