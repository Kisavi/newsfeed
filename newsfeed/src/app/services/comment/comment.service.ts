import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  // comment url
  private commentUrl = `${environment.baseUrl}/comments`

  constructor(private http: HttpClient) { }
  // method to get all comments
  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentUrl)
  }
}
