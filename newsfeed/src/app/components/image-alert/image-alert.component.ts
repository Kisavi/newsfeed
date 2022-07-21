import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image/image.service';

@Component({
  selector: 'app-image-alert',
  templateUrl: './image-alert.component.html',
  styleUrls: ['./image-alert.component.css']
})
export class ImageAlertComponent implements OnInit {
  numberOfLikes : number = 0;
  public images:any[] = []

  likeButtonClick(){
    this.numberOfLikes++
  }

  constructor(private imageService: ImageService) { }

  // subscribe to the observarble returned by the image service
  ngOnInit(): void {
    this.imageService.getImages()
     .subscribe(data => {console.log(data)
       this.images = data});
  }

}
