import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../../models/post";

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {

  fullPost!: Post;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe((value) => {
      this.fullPost = this.router.getCurrentNavigation()?.extras.state as Post;
    })
  }

  ngOnInit(): void {
  }

}
