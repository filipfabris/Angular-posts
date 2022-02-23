import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { PostComponent } from './components/post/post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routers: Routes = [
  { path: "", component: HomeComponent },
  { path: "users", component: UsersComponent },
  { path: "posts", component: PostsComponent },
  { path: "post/:id", component: PostComponent },
  { path: "**", component: NotFoundComponent } //Mora biti zadnji
];

@NgModule({
  exports: [RouterModule],

  imports: [
    RouterModule.forRoot(routers)
  ]
})


export class AppRoutingModule { }
