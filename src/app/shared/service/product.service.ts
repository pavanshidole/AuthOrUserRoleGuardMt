import { Injectable } from '@angular/core';
import { Iproduct } from '../model/product';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _router:Router
  ) { }


  productArr:Array<Iproduct>=[
    {
      pName:'samsung M31',
      PId:'123',
      pStatus:'inprogress',
      canReturn:1,
      pImg:`https://www.tupi.com.py/imagen_articulo/62360__600__600__CELULAR-SAMSUNG-GALAXY-M31-128GB-DUOS-NEGRO`
    },
    {
      pName:'Iphone',
      PId:'124',
      pStatus:'delivered',
      canReturn:0,
      pImg:`https://cdn.dxomark.com/wp-content/uploads/drafts/post-178568/Apple-iPhone-16-Pro-Max_featured-image-packshot-review.png`
    },
    {
      pName:'one plus',
      PId:'125',
      pStatus:'dispatch',
      canReturn:1,
      pImg:`https://i.pinimg.com/736x/fb/d3/40/fbd340389c1ac35dfa513f9aca85ed2f.jpg`
    },
    {
      pName:'vivo',
      PId:'126',
      pStatus:'inprogress',
      canReturn:0,
      pImg:`data:image/jpeg;base64,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`
    },
  ]


  fetchAllUser():Array<Iproduct>{
      return this.productArr
    }
  
    getUserInfo(id:string):Iproduct{
      return this.productArr.find(user=>user.PId===id)!
    }
  
    addUser(prod:Iproduct){
      this.productArr.push(prod);
      this._router.navigate(['product']);
    }
  
    onUpdateUser(prod:Iproduct){
      let getIndex=this.productArr.findIndex(userObj=>userObj.PId===prod.PId);
  
      this.productArr[getIndex]=prod;
      this._router.navigate(['product']);
    }
  
    onRemoveUser(prod:Iproduct){
      let getIndex=this.productArr.findIndex(userObj=>userObj.PId===prod.PId);
  
      this.productArr.splice(getIndex,1);
      this._router.navigate(['product']);
    }
}
