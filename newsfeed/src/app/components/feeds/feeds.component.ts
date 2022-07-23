import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/services/feed/feed.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  public feeds: any[] = [];
  public users: User[] = [];
  public randomIndex = 0;
  public randomUser: any = {};
  public userId!: number;

  constructor(private feedService: FeedService, private userService: UserService) { }

  
  ngOnInit(): void {
    this.getFeeds()
    
    // subscribe to the observable returned by the user service to get all users
    this.userService.getUsers()
      .subscribe(data => {
        // console.log(data)
        this.users = data
        // console.log(this.users)
        // get a random index from the user's array
        this.randomIndex = Math.floor((Math.random() * this.users.length))
        // console.log(this.randomIndex)
        // get the user at the index of the random index in the user's array
        this.randomUser = this.users[this.randomIndex]
        // console.log(this.randomUser)
      });
  }
  like(index: number) {
    // console.log(index)
    // console.log(this.randomUser)
    let newLike = {
      "subject": this.randomUser.firstname,
      "action": "liked",
      "pronoun": `${this.feeds[index].subject}'s`,
      "object": this.feeds[index].object,
      "context": "thumb",
      "date": Date.now(),
      "userId": this.randomUser.id
    }

    this.feeds.unshift(newLike)
  };

 // subscribe to the observable returned by the feed service to get all feeds
  getFeeds(){
    this.feedService.getAllFeeds()
      .subscribe(data => {
        // console.log(data)
        this.feeds = data
        // console.log(this.feeds)
      })
  }

// receive the emitted userid and query the database using the userId
  setUserId(id: number) {
    // let userId = id
    this.userId = id
    this.feedService.getUserFeed(this.userId)
      .subscribe(data => {
        console.log(data)
          this.feeds = data
      })
    // console.log(this.userId)
  }
}
