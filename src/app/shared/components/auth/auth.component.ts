import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLogin:boolean=true;
  loginForm !:FormGroup;
  SignUpForm !:FormGroup

  constructor(
    private _authservice:AuthService
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
    this.createSignUpForm();
  }


  createLoginForm(){
    this.loginForm=new FormGroup({
      email: new FormControl(null,[Validators.required]),
      password: new FormControl(null,[Validators.required]),

    })
  }


  createSignUpForm(){
    this.SignUpForm=new FormGroup({
      email:new FormControl (null,[Validators.required]),
      password:new FormControl (null,[Validators.required]),
      confirmPassword:new FormControl (null,[Validators.required]),
      userRole:new FormControl (null,[Validators.required]),
    })
  }


  onLogIn(){
    if(this.loginForm.valid){
      let logInObj={...this.loginForm.value};

      this._authservice.appLogIn(logInObj);
    }
  }

}
