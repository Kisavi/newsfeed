import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserFeedComponent } from './components/user-feed/user-feed.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'user', component:UserFeedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
