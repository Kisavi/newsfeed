import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feed } from 'src/app/models/feed';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  // feed url
  private feedUrl = `${environment.baseUrl}/feeds`
 

  constructor(private http: HttpClient) { }

  //method to get all the feeds
  getAllFeeds(): Observable<Feed[]> {
    return this.http.get<Feed[]>(this.feedUrl)
  }
}
