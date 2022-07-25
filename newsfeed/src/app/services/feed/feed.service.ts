import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Feed } from 'src/app/models/feed';
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
      .pipe(tap((feeds) => feeds.sort((a, b) => b.date - a.date)))
      .pipe(catchError(this.errorHandler))
  };

  // method to get a feed by id
  getFeed(feedId: any): Observable<Feed[]> {
    return this.http.get<Feed[]>(`${this.feedUrl}/${feedId}`)
      .pipe(catchError(this.errorHandler))
  };

  // method to get feeds of a single user
  getUserFeed(userId: any): Observable<Feed[]> {
    return this.http.get<Feed[]>(`${this.feedUrl}?userId=${userId}`)
      .pipe(tap((feeds) => feeds.sort((a, b) => b.date - a.date)))
      .pipe(catchError(this.errorHandler))
  };

  // method to create a  feed alert in the database
  createAlert(alertDetails: any): Observable<any> {
    return this.http.post<Feed[]>(this.feedUrl, alertDetails)
      .pipe(catchError(this.errorHandler))
  };

  // method to update like and comment of a feed
  updateAlert(feedId: any, alertDetails: any): Observable<any> {
    return this.http.put<Feed[]>(`${this.feedUrl}/${feedId}`, alertDetails)
      .pipe(catchError(this.errorHandler))
  };

  // method for handling http error 
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error")
  }


}
