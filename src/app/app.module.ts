import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {UserResolveService} from "./services/user-resolve.service";
import {PostResolveService} from "./services/post-resolve.service";
import { FullUserComponent } from './components/full-user/full-user.component';
import { FullPostComponent } from './components/full-post/full-post.component';
import { ChosenPostComponent } from './components/chosen-post/chosen-post.component';

const routes: Routes = [{
  path: 'users', component: UsersComponent, resolve: {usersData: UserResolveService}, children: [{
    path: ':id', component: FullUserComponent, children: [{
      path: 'posts', component: ChosenPostComponent
    }]
  }]
  }, {
    path: 'posts', component: PostsComponent, resolve: {postsData: PostResolveService}, children: [{
      path: ':id', component: FullPostComponent
  }]
}]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    FullUserComponent,
    FullPostComponent,
    ChosenPostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    RouterModule,
    RouterModule,
    RouterModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
