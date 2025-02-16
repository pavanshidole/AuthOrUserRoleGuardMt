import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ifair } from 'src/app/shared/model/fair';
import { FairService } from 'src/app/shared/service/fair.service';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.scss']
})
export class FairDetailsComponent implements OnInit {

  fairId !:string;
  fairObj !:Ifair

  constructor(
   private _route:ActivatedRoute,
   private _fairService:FairService
  ) { }

  ngOnInit(): void {

    this._route.params
    .subscribe((res:Params)=>{
      this.fairId=res['fairId'];
      
      this.fairObj=this._fairService.getfairInfo(this.fairId);
      
    })
    
  }

}
