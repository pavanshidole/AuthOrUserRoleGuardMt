import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/shared/model/user';
import { UserService } from 'src/app/shared/service/user.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userId !:string;
  userObj !:Iuser
  isInEditMode:boolean=false;
  userForm !:FormGroup;
  mode:'create' |'edit'='create';
  btnDisable:boolean=false;

  constructor(
    private _route:ActivatedRoute,
    private _userService:UserService,
    private _uuid:UuidService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.editMode();
  }

  editMode(){
    this.userId=this._route.snapshot.params['userId'];
    if(this.userId){
      this.isInEditMode=true;
      this.mode='edit';

      this.userObj=this._userService.getUserInfo(this.userId)
      this.userForm.patchValue({...this.userObj});

      if(this._route.snapshot.queryParams['userRole']==='candidate'){
        this.userForm.disable();
        this.btnDisable=true
      }
    }else{
      this.isInEditMode=false;
      this.mode='create';
    }
  }


  createForm(){
    this.userForm=new FormGroup({
      userName:new FormControl(null,[Validators.required]),
      userRole:new FormControl(null,[Validators.required]),
    })
  }

  onSubmit(){
    if(this.userForm.valid){
      if(this.mode==='create'){
        let newUserObj={...this.userForm.value,userId:this._uuid.generateUuid()};
        
        this._userService.addUser(newUserObj);
        
      }else if(this.mode==='edit'){
        let newUpdateObj={...this.userForm.value,userId:this.userId};
        this._userService.onUpdateUser(newUpdateObj);
      }
    }
    this.userForm.reset();
  }

}
