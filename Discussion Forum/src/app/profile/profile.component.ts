import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { BlogService } from '../services/blog.service';
import * as jwt_decode from 'jwt-decode';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  
  constructor(
  	private userService:UserService,
  	private blogService:BlogService,
  	private router: Router,
  	private route: ActivatedRoute,
  	) {}

  user;
  AllUserBlog;

  ngOnInit() {
  	let id = this.route.snapshot.paramMap.get('id');
  	this.userService.getUserById(id).subscribe(data => 
      {
        this.user = data
      },
        err=>console.log(err));
    this.blogService.getBlogByUser(id).subscribe(data=>{this.AllUserBlog=data;});
    console.log(this.user);
  }


}
