import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  loginUserData = {}

  constructor(private _auth: AuthService,
              private _router: Router) { }

  login_user:String="user"; 
  status:Boolean;
  flag:Boolean=false;
  cnt=0

  ngOnInit()
  {
  	if(localStorage.getItem('token')!=null){
  		this.status=true;
  		this.login_user = jwt_decode(localStorage.getItem('token')).subject;
  	}	
  }
  
  changeFlag = function(state)
  {
    if(this.cnt==2 && state=='login')
    {
      this.flag=true;
      this.cnt=1;
      this._router.navigate(['/home'])
    }
    else if(this.cnt==1 && state=='NewUser')
    {
      this.flag=false;
      this.cnt=2;
      this._router.navigate(['/register'])
    }
    else if(state=='login')
    {  
      this.flag=true;
      this.cnt=1;
    }
    else if(state=='NewUser')
    {
      this.cnt=2;
      this._router.navigate(['/register'])
    }
    this.ngOnInit();
  }

  async login(user:String,pass:String)
  {
    this.loginUserData={
      user_id:user,
      password:pass
    };

    this._auth.loginUser(this.loginUserData).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.flag=false;
        this.status=true;
        this.login_user=user;
      },
      err => {console.log(err);
        alert("Invalid UserName or password!!")}
    )
    window.location.reload();
    this.ngOnInit();
    
  }

  logout()
  {
    this._auth.logoutUser();
    this.status=false;
    this.flag=false;
    this.login_user="user";
    //this.ngOnInit();
    window.location.reload();
  }

}
