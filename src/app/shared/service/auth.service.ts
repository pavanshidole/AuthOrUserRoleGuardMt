import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IlogIn } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoginState:boolean=false

  constructor(
    private _router:Router
  ) { }

  isAuthinticated():Promise<boolean>{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        if(localStorage.getItem('token')){
          this.isLoginState=true;
        }else{
          this.isLoginState=false;
          this._router.navigate(['']);
        }

        resolve(this.isLoginState);
        
      }, 500);
    })
  }

  appLogIn(logObj:IlogIn){
    if(logObj.email==='pavanshidole@gmail.com' && logObj.password==='pavan@123'){
      localStorage.setItem('token','jwt token Access from local storage ');
      localStorage.setItem('userRole','buyer');
      this._router.navigate(['home']);
    }else if(logObj.email==='jhon@gmail.com' && logObj.password==='jhon@123'){
      localStorage.setItem('token','jwt token Access from local storage ');
      localStorage.setItem('userRole','admin');
      this._router.navigate(['home']);
    }else if(logObj.email==='may@gmail.com' && logObj.password==='may@123'){
      localStorage.setItem('token','jwt token Access from local storage ');
      localStorage.setItem('userRole','superAdmin');
      this._router.navigate(['home']);
    }else{
      alert('email and password is invalid');
    }
  }


  appLogOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('userRole')
    this._router.navigate(['']);
  }
}
