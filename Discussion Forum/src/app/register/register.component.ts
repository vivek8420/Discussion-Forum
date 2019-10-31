import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService,
  	private _router: Router
  	) { }

  ngOnInit() {
  }

 onSave=function(user){
 	console.log("onsave");
 	this.userService.saveUser(user).subscribe( data =>{
 		this._router.navigate(['/home']);
 	});
 }
}
