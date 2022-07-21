import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserFeedComponent } from './components/user-feed/user-feed.component';
import { ImageAlertComponent } from './components/image-alert/image-alert.component';
import { CommentAlertComponent } from './components/comment-alert/comment-alert.component';
import { LikeAlertComponent } from './components/like-alert/like-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    UserFeedComponent,
    ImageAlertComponent,
    CommentAlertComponent,
    LikeAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
