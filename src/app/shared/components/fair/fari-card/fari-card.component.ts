import { Component, Input, OnInit } from '@angular/core';
import { Ifair } from 'src/app/shared/model/fair';

@Component({
  selector: 'app-fari-card',
  templateUrl: './fari-card.component.html',
  styleUrls: ['./fari-card.component.scss']
})
export class FariCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() fairObj !:Ifair

}
