import { Component, OnInit } from '@angular/core';
import { Ifair } from '../../model/fair';
import { FairService } from '../../service/fair.service';

@Component({
  selector: 'app-fair',
  templateUrl: './fair.component.html',
  styleUrls: ['./fair.component.scss']
})
export class FairComponent implements OnInit {

  fairArr :Array<Ifair>=[]

  constructor(
    private _fairSerivce:FairService
  ) { }

  ngOnInit(): void {
    this.fairArr=this._fairSerivce.fetchAllFair()
  }

}
