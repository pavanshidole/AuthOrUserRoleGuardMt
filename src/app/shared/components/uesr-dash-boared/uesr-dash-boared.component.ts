import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../model/user';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-uesr-dash-boared',
  templateUrl: './uesr-dash-boared.component.html',
  styleUrls: ['./uesr-dash-boared.component.scss']
})
export class UesrDashBoaredComponent implements OnInit {

  userArr :Array<Iuser> = []

  constructor(
    private _userService:UserService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userArr=this._userService.fetchAllUser();
    this._router.navigate([this.userArr[0].userId],{
      relativeTo:this._route
    })
  }

}
