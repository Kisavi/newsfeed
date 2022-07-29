import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // user url
  private userUrl = "https://jsonfeedsapi.herokuapp.com/users";
  // private userUrl = `${environment.baseUrl}/users`

  constructor(private http: HttpClient) { }
  // method to get all the users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
      .pipe(catchError(this.handleError))
  }

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
