import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public users:User[] = [];

  constructor(private userService: UserService) { }

  // subscribe to the observerble returned in the user service module
  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe(data => {console.log(data)
      this.users = data
       console.log(this.users)});
  }
  

}
