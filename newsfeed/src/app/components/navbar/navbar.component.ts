import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() userId=new EventEmitter<number>();
  @Output() getUserFeeds =new EventEmitter();

  public users:User[] = [];

  constructor(private userService: UserService) { }

  // subscribe to the observerble returned in the user service module to get all users
  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe(data => {console.log(data)
      this.users = data
       console.log(this.users)});
  }
  
// get single user(userId of the user clicked)
getUser(index: number){
  console.log(this.users[index].firstname)
  let UserId = this.users[index].id
  console.log(UserId)
    this.userId.emit(UserId);
}

// get all feeds
getAllFeeds(){
  this.getUserFeeds.emit()
}
 
}
