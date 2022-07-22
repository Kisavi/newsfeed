import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/services/feed/feed.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  public feeds:any = []

  constructor(private feedService: FeedService) { }

  // subscribe to the observable returned by the feed service
  ngOnInit(): void {
    this.feedService.getAllFeeds()
     .subscribe(data => {console.log(data)
       this.feeds = data});
  }

}
