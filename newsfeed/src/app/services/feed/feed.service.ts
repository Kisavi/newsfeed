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
  private feedUrl = "https://jsonfeedsapi.herokuapp.com/feeds";
  // private feedUrl = `${environment.baseUrl}/feeds`;

  constructor(private http: HttpClient) { }

 //method to get all the feeds
  getAllFeeds(): Observable<Feed[]> {
    return this.http.get<Feed[]>(this.feedUrl)
      .pipe(tap((feeds) => feeds.sort((a, b) => b.date - a.date)))
      .pipe(
        catchError(this.handleError))
  };

  // method to get a feed by id
  getFeed(feedId: any): Observable<Feed[]> {
    return this.http.get<Feed[]>(`${this.feedUrl}/${feedId}`)
      .pipe(catchError(this.handleError))
  };

  // method to get feeds of a single user
  getUserFeed(userId: any): Observable<Feed[]> {
    return this.http.get<Feed[]>(`${this.feedUrl}?userId=${userId}`)
      .pipe(tap((feeds) => feeds.sort((a, b) => b.date - a.date)))
      .pipe(catchError(this.handleError))
  };

  // method to create a  feed alert in the database
  createAlert(alertDetails: any): Observable<any> {
    return this.http.post<Feed[]>(this.feedUrl, alertDetails)
      .pipe(catchError(this.handleError))
  };

  // method to update like and comment of a feed
  updateAlert(feedId: any, alertDetails: any): Observable<any> {
    return this.http.put<Feed[]>(`${this.feedUrl}/${feedId}`, alertDetails)
      .pipe(catchError(this.handleError))
  };

  // method for handling http error 
  private handleError(error: HttpErrorResponse) {
    let errorMsg = ''
    if (error.status === 0) {
      // client side or network error
      console.error("Sorry, an error occured:", error.error)
    } else {
      // backend error
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
      errorMsg = `Backend returned code ${error.status}, body was: `, error.error
    }
    // Return an observable with a user friendly message.
    errorMsg += "Something bad happened, please try again later."
    return throwError(() => new Error(errorMsg))
  }




}
