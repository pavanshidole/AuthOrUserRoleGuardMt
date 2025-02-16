import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/product';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  prodId !:string;
  prodObj !:Iproduct

  constructor(
    private _route:ActivatedRoute,
    private _prodService:ProductService
  ) { }

  ngOnInit(): void {

    this._route.params
    .subscribe((res:Params)=>{
      this.prodId=res['ProductId'];
      this.prodObj=this._prodService.getUserInfo(this.prodId);
    })
  }

  onRemove(){
    this._prodService.onRemoveUser(this.prodObj)
  }

}
