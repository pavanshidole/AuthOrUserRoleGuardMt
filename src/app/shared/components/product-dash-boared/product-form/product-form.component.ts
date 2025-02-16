import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/product';
import { ProductService } from 'src/app/shared/service/product.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

   prodId !:string;
   prodObj !:Iproduct;
   isInEditMode:boolean=false;
   productForm !:FormGroup;
   btnDisable :boolean=false

  constructor(
    private _route:ActivatedRoute,
    private _uuid:UuidService,
    private _prodService:ProductService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.editmode();
  }

  editmode(){
    this.prodId=this._route.snapshot.params['ProductId'];
    if(this.prodId){
      this.isInEditMode=true;

      this.prodObj=this._prodService.getUserInfo(this.prodId);
      let canReturn=this.productForm.value.canReturn?'yes':'no';

      this.productForm.patchValue({...this.prodObj,canReturn:canReturn});

      this._route.queryParams
      .subscribe((res:Params)=>{
        if(res['canEdit']==='0'){
          this.productForm.disable()
          this.btnDisable=true
        }
      })
    }else{
      this.isInEditMode=false;
    }
  }

  createForm(){
    this.productForm=new FormGroup({
      pName:new FormControl(null, [Validators.required]),
      pStatus:new FormControl(null, [Validators.required]),
      canReturn:new FormControl(null, [Validators.required]),
    })
  }

  onSubmit(){
    if(this.productForm.valid){
      if(!this.isInEditMode){
        let canReturn=this.productForm.value.canReturn==='yes'?1:0;
        let AddnewProd={...this.productForm.value,canReturn:canReturn,PId:this._uuid.generateUuid()};

        this._prodService.addUser(AddnewProd);
        this.productForm.reset();
        
      }
    }
  }

  onUpdate(){
    if(this.isInEditMode){
      let canReturn=this.productForm.value.canReturn==='yes'?1:0;
      let updateObj={...this.productForm.value,PId:this.prodId,canReturn:canReturn};
      this._prodService.onUpdateUser(updateObj);
    }
  }

}
