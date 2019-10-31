import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {BlogService} from '../services/blog.service';
import {CommentsService} from '../services/comments.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(
  	private userService:UserService,
  	private blogService: BlogService,
    private commentService:CommentsService,
    ) { }

  AllUser;
  login_user="user";
  ngOnInit() 
  {
  	if(localStorage.getItem('token')!=null)
    {
      this.login_user = jwt_decode(localStorage.getItem('token')).subject;
    }
    
  	this.userService.getAllUsers().subscribe(data=>{this.AllUser=data;});
  }


  deleteUser(id)
  {
  	//console.log("delete:"+id);
  	this.userService.deleteUser(id).subscribe(data =>{this.ngOnInit()});
    this.blogService.deleteByUser(id).subscribe( data =>{this.ngOnInit()});
    this.commentService.deleteByUser(id).subscribe( data =>{this.ngOnInit()});
  }
}
