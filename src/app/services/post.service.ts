import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Post } from '../models/Post';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}


@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsUrl: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    console.log("Dobivam API postove")
    return this.http.get<Post[]>(this.postsUrl);
  }

  savePost(post: Post): Observable<Post> {
    console.log("Save post");
    return this.http.post<Post>(this.postsUrl, post, httpOptions);
  }


  updatePost(post: Post): Observable<Post> {

    const url = `${this.postsUrl}/${post.id}`;
    console.log(url);

    return this.http.put<Post>(url, post, httpOptions);
  }

  getPost(id: number): Observable<Post> { //Za post.component i routing

    const url = `${this.postsUrl}/${id}`;

    return this.http.get<Post>(url); //get request
  }

  removePost(post: Post | number): Observable<Post> {
    const id = typeof post == 'number' ? post : post.id;
    const url = `${this.postsUrl}/${id}`;

    return this.http.delete<Post>(url, httpOptions);


  }

}
