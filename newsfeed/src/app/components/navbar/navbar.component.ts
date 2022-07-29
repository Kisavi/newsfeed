import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user';
declare const openNav: any;
declare const closeNav: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() userId=new EventEmitter<number>();
  @Output() getUserFeeds =new EventEmitter();

  public users:User[] = [];
  public errorMessage:any;

  constructor(private userService: UserService) { }

  // subscribe to the observerble returned in the user service module to get all users
  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe(data => {
      console.log(data)
      this.users = data
      },(error) => {
        this.errorMessage = error
      });
  }
  
// get single user(userId of the user clicked)
getUser(index: number){
  let UserId = this.users[index].id
    this.userId.emit(UserId);
}

// get all feeds
getAllFeeds(){
  this.getUserFeeds.emit()
}

openNavbar() {
  openNav()
}

closeNavbar() {
  closeNav()
}
 
}
