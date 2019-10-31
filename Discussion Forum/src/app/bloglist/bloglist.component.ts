import { Component} from '@angular/core';
import {BlogService} from '../services/blog.service';
import {HttpModule,Response, Headers, RequestOptions } from '@angular/http'; 
import { Router} from '@angular/router';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
import * as jwt_decode from 'jwt-decode';
import { AuthService } from '../services/auth.service';
import {CommentsService} from '../services/comments.service';


@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})


export class BloglistComponent{

  constructor(
    private blogService: BlogService,
    private commentService:CommentsService,
    private router:Router,
  ) { }

  private blog;
  AllBlogs;
  flag:Boolean;
  status:Boolean;
  login_user="user";

  ngOnInit()
  {
    if(localStorage.getItem('token')!=null)
    {
      this.status=true;
      this.login_user = jwt_decode(localStorage.getItem('token')).subject;
    }
    else
      this.status=false;
    
    this.flag=false;
    this.blogService.getAllBlogs().subscribe(data => this.AllBlogs = data);
  }

  changeFlag = function(){
    this.flag=true;
  }

  onSave = function(blog)
  {      
    console.log("onSave blog");  
    this.blogService.saveBlog(blog).subscribe( data =>
      {this.ngOnInit();}
    , error => this.errorMessage = error )
    window.location.reload();
  }
 
  deleteBlog(id)
  {
    this.blogService.deleteById(id).subscribe( data =>{this.ngOnInit()});
    this.commentService.deleteByBlog(id).subscribe( data =>{this.ngOnInit()});
  }

  updateBlog(text,id)
  {
    const newBlog={
      id:id,
      text:text};
    this.blogService.updateBlogText(newBlog).subscribe(data =>{this.ngOnInit();});
    window.location.reload();
  }
  
}
