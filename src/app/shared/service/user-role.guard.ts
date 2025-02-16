import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {

  constructor(
    private _router:Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

      let loginUser:string=localStorage.getItem('userRole')!


      let loginArr:Array<string>=route.data['userRole'];

      if(loginArr.includes(loginUser)){
        return true
      }else{
        let UrlTree:UrlTree=this._router.createUrlTree(['home']);
        return UrlTree
      }
  }
  
}
