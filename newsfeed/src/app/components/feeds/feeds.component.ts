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
  public feed: any = {};
  public likesArray: any = [];
  public comments: any[]= [];
  public comment  = "";
  public isShown:boolean = false;
  
  constructor(private feedService: FeedService, private userService: UserService) { }

  ngOnInit(): void {
    this.getFeeds()

    // subscribe to the observable returned by the user service to get all users
    this.userService.getUsers()
      .subscribe(data => {
        // console.log(data)
        this.users = data

        // get a random index from the user's array
        this.randomIndex = Math.floor((Math.random() * this.users.length))

        // get the user at the index of the random index in the user's array
        this.randomUser = this.users[this.randomIndex]
      });
  }

  // method for liking a feed
  like(index: number) {

    // get the name of the person who liked
    let liker = this.randomUser.firstname

    let newLikeAlert = {
      "subject": liker,
      "action": "liked",
      "pronoun": `${this.feeds[index].subject}'s`,
      "object": this.feeds[index].object,
      "context": "thumb",
      "date": Date.now(),
      "userId": this.randomUser.id
    }

    // create like alert
    this.feedService.createAlert(newLikeAlert)
      .subscribe(data => {
        console.log(data)
      })

    // get feed by id
    let feedId = this.feeds[index].id

    this.feedService.getFeed(feedId)
      .subscribe(data => {
        console.log(data)
        this.feed = data
        this.likesArray = this.feed.likes

        this.likesArray.push(liker)

        let newLikeArray = this.likesArray

        let addLike = {
          "subject": this.feed.subject,
          "action": this.feed.action,
          "pronoun": this.feed.pronoun,
          "object": this.feed.object,
          "image_url": this.feed.image_url,
          "date": this.feed.date,
          "likes": newLikeArray,
          "comments": this.feed.comments,
          "userId": this.feed.userId
        }

        // put the selected feed with the updated like array
        this.feedService.updateAlert(feedId, addLike)
          .subscribe(data => {
            console.log(data)
            this.getFeeds()
          })
      })

    this.getFeeds()
  };

  // method to comment on a feed
  getComment(index: number){

     // get the name of the person who commented
     let commentor = this.randomUser.firstname

     let commentAlert = {
      "subject": commentor,
      "action": "commented on",
      "pronoun": `${this.feeds[index].subject}'s`,
      "object": this.feeds[index].object,
      "message": this.comment,
      "likes": [],
      "comments": [],
      "date": Date.now(),
      "userId": this.randomUser.id
     }

    //  create comment alert
    this.feedService.createAlert(commentAlert)
     .subscribe(data => {
      console.log(data)
     })

    // get feed by id
    let feedId = this.feeds[index].id

    this.feedService.getFeed(feedId)
     .subscribe(data => {
      console.log(data)
      this.feed = data
      this.comments = this.feed.comments
      
      let newComment=this.comment
      this.comments.push({"commentor":commentor , "comment":newComment})
      this.comment = ""

      let newCommentArray = this.comments
      
      let addComment = {
        "subject": this.feed.subject,
        "action": this.feed.action,
        "pronoun": this.feed.pronoun,
        "object": this.feed.object,
        "image_url": this.feed.image_url,
        "date": this.feed.date,
        "likes": this.feed.likes,
        "comments": newCommentArray,
        "userId": this.feed.userId
      }

      // put the selected feed with the updated like array
      this.feedService.updateAlert(feedId, addComment)
        .subscribe(data => {
          console.log(data)
          this.getFeeds()
        })
     })

  }

  // subscribe to the observable returned by the feed service to get all feeds
  getFeeds() {
    this.feedService.getAllFeeds()
      .subscribe(data => {
        console.log(data)
        this.feeds = data
      })
  }

  // receive the emitted userid and query the database using the userId
  setUserId(id: number) {
    this.userId = id
    this.feedService.getUserFeed(this.userId)
      .subscribe(data => {
        console.log(data)
        this.feeds = data
      })
  }

  // toggle the comment section
  toggleComment(feedIndex: number){
    this.isShown = !this.isShown
  }
}
