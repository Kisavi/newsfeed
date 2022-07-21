import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-comment-alert',
  templateUrl: './comment-alert.component.html',
  styleUrls: ['./comment-alert.component.css']
})
export class CommentAlertComponent implements OnInit {
  public comments:any = []

  constructor(private commentService: CommentService) { }

  // subscribe to the observarble returned by the comment service
  ngOnInit(): void {
    this.commentService.getComments()
      .subscribe(data => {console.log(data)
         this.comments = data});
  }

}
