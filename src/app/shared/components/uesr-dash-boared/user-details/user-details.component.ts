import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iuser } from 'src/app/shared/model/user';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userId !:string;
  userObj !:Iuser

  constructor(
    private _route:ActivatedRoute,
    private _userService:UserService
  ) { }

  ngOnInit(): void {

    this._route.params
    .subscribe((res:Params)=>{
      this.userId=res['userId'];
      this.userObj=this._userService.getUserInfo(this.userId);
    })
  }

  onRemove(){
    this._userService.onRemoveUser(this.userObj)
  }

}
