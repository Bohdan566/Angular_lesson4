import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'https://jsonplaceholder.typicode.com/posts';
  urlUsersWithPosts = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.url);
  }

  getChosenPosts(id: number): Observable<Post[]>{
    return this.httpClient.get<Post[]>(`${this.urlUsersWithPosts}${id}/posts`);
  }
}
