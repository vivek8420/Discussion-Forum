import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {CommentsService} from '../services/comments.service';
import {BlogService} from '../services/blog.service';
import {switchMap} from 'rxjs/operators';
import {HttpModule,Response, Headers, RequestOptions } from '@angular/http'; 
import * as jwt_decode from 'jwt-decode';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-addcomments',
  templateUrl: './addcomments.component.html',
  styleUrls: ['./addcomments.component.css']
})
export class AddcommentsComponent implements OnInit {

  constructor(
 	 	  private route: ActivatedRoute,
  		private router: Router,
  		private commentService:CommentsService,
  		private blogService:BlogService,
      private _auth: AuthService
	) {}

  private blog;
  AllComments;
  flag:Boolean;
  login_user="user";

ngOnInit()
{
    if(localStorage.getItem('token')!=null)
    {
      this.flag=true;
      this.login_user = jwt_decode(localStorage.getItem('token')).subject;
    }
    else
      this.flag=false;
    
  	let id = this.route.snapshot.paramMap.get('id');
  	this.blogService.getBlogById(id).subscribe(data => 
      {
        this.blog = data
      },
        err=>console.log(err));
    this.commentService.getCommentById(id).subscribe(data=>{this.AllComments=data;});
  }

  onSave(comment:String)
  {  
    const newComment={
      blog_id:this.blog._id,
      text:comment
    };
    this.commentService.saveComment(newComment).subscribe( data =>{this.ngOnInit();});
    window.location.reload();
  }

  IncCommentLikes(id,likes)
  {
    const like={
      id:id,
      likes:likes+1
    };
    this.commentService.IncCommentLikes(like).subscribe( data =>{this.ngOnInit();});
  }

  IncBlogLikes(id,likes)
  {
    const like={
      id:id,
      likes:likes+1
    };
    this.blogService.IncBlogLikes(like).subscribe( data =>{this.ngOnInit();});
  }

  deleteComment(id)
  {
    this.commentService.deleteById(id).subscribe( data =>{this.ngOnInit();});
  }

  updateComment(text,id)
  {
    const newComment={
      id:id,
      text:text
    };

    this.commentService.updateCommentText(newComment).subscribe( data =>{this.ngOnInit();});
    window.location.reload();
  }
}
