import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../models/user";

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {

  fullUser!: User;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe((value) => {
      this.fullUser = this.router.getCurrentNavigation()?.extras.state as User;
      // console.log(this.fullUser);
    })
  }

  ngOnInit(): void {
  }

}
