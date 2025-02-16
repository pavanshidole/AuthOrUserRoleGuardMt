import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../model/product';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-dash-boared',
  templateUrl: './product-dash-boared.component.html',
  styleUrls: ['./product-dash-boared.component.scss']
})
export class ProductDashBoaredComponent implements OnInit {

  prodArr :Array<Iproduct>=[];
  selectedId!:string;
  

  constructor(
    private _prodService:ProductService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    this.prodArr=this._prodService.fetchAllUser()
    this._router.navigate([this.prodArr[0].PId],{
      relativeTo:this._route
    })
    this.selectedId=this.prodArr[0].PId
  }


  onprod(prod:Iproduct){
    
    this._router.navigate([prod.PId],{
      relativeTo:this._route,
      queryParams:{
        canEdit:prod.canReturn
      }
    })

    this.selectedId=this.prodArr[0].PId
  }

  // onProd(prod:Iproduct){
    
  //   this._router.navigate([prod.PId],{
  //     relativeTo:this._route,
  //     queryParams:{
  //       canEdit:prod.canReturn
  //     }
  //   })
  // }
}
