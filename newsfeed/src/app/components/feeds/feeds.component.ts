import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/services/feed/feed.service';
import { UserService } from 'src/app/services/user/user.service';
import { Feed } from 'src/app/models/feed';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  public feeds:Feed[] = [];
  public users:User[] = [];
  public randomIndex = 0;
  public randomUser:any = {}

  constructor(private feedService: FeedService,private userService: UserService) { }

  // subscribe to the observable returned by the feed service
  ngOnInit(): void {
    this.feedService.getAllFeeds()
     .subscribe(data => {console.log(data)
       this.feeds = data 
      console.log(this.feeds)})
      this.userService.getUsers()
      // subscribe to the observable returned by the user service to get user list
      .subscribe(data => {console.log(data)
        this.users = data
        console.log(this.users)
        // get a random index from the user's array
          this.randomIndex = Math.floor((Math.random() * this.users.length))
          console.log(this.randomIndex)
          // get the user at the index of the random index in the user's array
          this.randomUser = this.users[this.randomIndex]
            console.log(this.randomUser)});
  }

}
