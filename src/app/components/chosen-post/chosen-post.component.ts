import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/post";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-chosen-post',
  templateUrl: './chosen-post.component.html',
  styleUrls: ['./chosen-post.component.css']
})
export class ChosenPostComponent implements OnInit {

  chosenPosts!: Post[];
  id = 0;

  constructor(private postService: PostService,private activatedRoute: ActivatedRoute) {
    this.activatedRoute.parent?.url.subscribe( (value) => {

      for (const valueKey in value) {
        console.log(value[valueKey].path);
        this.id = +value[valueKey].path;
      }

      this.postService.getChosenPosts(this.id).subscribe((value) => {
        this.chosenPosts = value;
      });
    });
  }

  ngOnInit(): void {
  }

}


