import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _authSerive:AuthService
  ) { }

  ngOnInit(): void {
  }


  onLogOut(){
    this._authSerive.appLogOut();
  }

}
