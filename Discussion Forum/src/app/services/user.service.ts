import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})


export class UserService {

  constructor(private http:HttpClient) { }

  private url:string = 'http://localhost:8080/api/user/';
  private url1;
  saveUser(newUser)
  {
  	const newuser={
  		user_id:newUser.user_id,
      password:newUser.password,
  		name:newUser.name,
  		email:newUser.email,
  		mobile_no:newUser.mobile_no,
      skills:newUser.skills,
  		motto:newUser.motto,
  	};
  	return this.http.post(this.url,newuser);
  }

  getAllUsers()
  {
    //console.log("get all users");
    return this.http.get(this.url);
  }

  getUserById(id)
  {
    //console.log(this.url+id);
    return this.http.get(this.url+id);
  }

  deleteUser(id)
  {
    return this.http.delete(this.url+id);
  }

  updateUser(user)
  {
    return this.http.put(this.url,user);
  }
}
