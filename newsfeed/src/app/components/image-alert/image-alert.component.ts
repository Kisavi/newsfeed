import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-alert',
  templateUrl: './image-alert.component.html',
  styleUrls: ['./image-alert.component.css']
})
export class ImageAlertComponent implements OnInit {
  numberOfLikes : number = 0;

  likeButtonClick(){
    this.numberOfLikes++
  }

  constructor() { }

  ngOnInit(): void {
  }

}
