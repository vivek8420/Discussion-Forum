import { Injectable } from '@angular/core'; 
import {HttpClient} from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  constructor(private http:HttpClient) {}

  private url:string = 'http://localhost:8080/api/blog/';
  
  saveBlog(newBlog)
  {
  	//console.log("In save blog");
  	const newblog={
  		user_id:jwt_decode(localStorage.getItem('token')).subject,
      title:newBlog.title,
  		likes:0,
      views:0,
  		tags:newBlog.tags,
  		text:newBlog.blog_text,
  		date:new Date
  	};

  	//console.log(this.url);
  	return this.http.post(this.url,newblog);
  }

  getAllBlogs()
  {
    //console.log("get all blogs");
    return this.http.get(this.url);
  }

  getBlogById(id)
  {
    //console.log("get blog by id:"+this.url+id);
    return this.http.get(this.url+id);
  }

  getBlogByUser(id)
  {
    //console.log("get blogs by user_id:",this.url+"user_id/"+id);
    return this.http.get(this.url+"user_id/"+id); 
  }
  
  deleteById(id)
  {
    //console.log("delete blog By Id:"+this.url+id);
    return this.http.delete(this.url+id);
  }

  deleteByUser(id)
  {
   //console.log("delete blog By Id:"+this.url+"user_id/"+id);
   return this.http.delete(this.url+"user_id/"+id);  
  }

  updateBlogText(text)
  {
    //console.log("update blog"+this.url);
    return this.http.put(this.url+"text/",text);
  }

  IncBlogLikes(like)
  {
    return this.http.put(this.url+"likes/",like);
  }
}
