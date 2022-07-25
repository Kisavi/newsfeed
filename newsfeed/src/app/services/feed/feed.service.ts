import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Feed } from 'src/app/models/feed';
import { environment } from 'src/environments/environment';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

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
      .pipe(tap((feeds) => feeds.sort((a, b) => b.date - a.date)))
  };

  // method to get a feed by id
  getFeed(feedId: any): Observable<Feed[]> {
    return this.http.get<Feed[]>(`${this.feedUrl}/${feedId}`)
  };

  // method to get feeds of a single user
  getUserFeed(userId: any): Observable<Feed[]> {
    return this.http.get<Feed[]>(`${this.feedUrl}?userId=${userId}`)
      .pipe(tap((feeds) => feeds.sort((a, b) => b.date - a.date)))
  };

  // method to create a like feed alert in the database
  createLikeAlert(likeDetails: any): Observable<any> {
    return this.http.post<Feed[]>(this.feedUrl, likeDetails)
  };

  // method to create a  feed alert in the database
  createAlert(alertDetails: any): Observable<any> {
    return this.http.post<Feed[]>(this.feedUrl, alertDetails)
  };

  // method to update the like array
  updateAlert(feedId: any, alertDetails: any): Observable<any> {
    return this.http.put<Feed[]>(`${this.feedUrl}/${feedId}`, alertDetails)
      // .catch(this.errorHandler)
  };


  // method for handling http error 
  // errorHandler(error :HttpErrorResponse) {
  //   return Observable.throw(error.message || "Server Error")
  // }


}
