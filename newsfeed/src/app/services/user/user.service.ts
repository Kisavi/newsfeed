import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // user url
  private userUrl = `${environment.baseUrl}/users`

  constructor(private http: HttpClient) { }
  // method to get all the users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
  }
}
