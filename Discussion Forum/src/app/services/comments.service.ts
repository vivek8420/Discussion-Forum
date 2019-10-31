import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class CommentsService {

  constructor(private http:HttpClient) { }

  private url:string = 'http://localhost:8080/api/comments/';
  saveComment(newComment)
  {
  	//console.log("In save comments");
  	const newcomment={
  		blog_id:newComment.blog_id,
  		user_id:jwt_decode(localStorage.getItem('token')).subject,
  		likes:0,
  		text:newComment.text,
  		date:new Date
  	};
  	//console.log(this.url);
  	return this.http.post(this.url,newcomment);
  }

  getAllComments()
  {
  	//console.log("get all comments");
    return this.http.get(this.url);
  }
  
  getCommentById(id)
  {
    return this.http.get(this.url+id); 
  }
  
  deleteById(id)
  {
    return this.http.delete(this.url+id);
  }

  deleteByBlog(id)
  {
    return this.http.delete(this.url+"blog_id/"+id);
  }

  deleteByUser(id)
  {
    return this.http.delete(this.url+"user_id/"+id);
  }

  updateCommentText(text)
  {
    return this.http.put(this.url+"text/",text);
  }

  IncCommentLikes(like)
  {
    return this.http.put(this.url+"likes/",like);
  }
}
