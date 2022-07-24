import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feed, Like } from 'src/app/models/feed';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  // feed url
  private feedUrl = `${environment.baseUrl}/feeds`;
 
  constructor(private http: HttpClient) { }

  //method to get all the feeds
  getAllFeeds(): Observable<Feed[]> {
    return this.http.get<Feed[]>(this.feedUrl)
  }

  // method to get a feed by id
  getFeed(feedId: any): Observable<Feed[]>{
    return this.http.get<Feed[]>(`${this.feedUrl}/${feedId}`)
  }

  // method to get feeds of a single user
  getUserFeed(userId: any): Observable<Feed[]> {
        return this.http.get<Feed[]>(`${this.feedUrl}?userId=${userId}`)
  }

  // method to create a like feed alert in the database
  createLikeAlert(likeDetails: any): Observable<any> {
    return this.http.post<Feed[]>(this.feedUrl, likeDetails)
  }

  // method to update the like array
  createLike(feedId: any, likeArray: any): Observable<any> {
    return this.http.put<Feed[]>(`${this.feedUrl}/${feedId}`, likeArray)
  }
  

}
