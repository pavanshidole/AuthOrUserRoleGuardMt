import { Injectable } from '@angular/core';
import { Iuser } from '../model/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _Router:Router
  ) { }

  userArr:Array<Iuser>=[
    {
      userName:'virat',
      userId:'123',
      userRole:'admin',
      userImg:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmUNBE4YlKPFxqxW7hIzg9LOJMgSKLUzjwUA&s`
    },
    {
      userName:'rajat',
      userId:'124',
      userRole:'candidate',
      userImg:`https://static.toiimg.com/thumb/msid-99241725,width-1280,height-720,resizemode-4/99241725.jpg`
    },
    {
      userName:'ab de villers ',
      userId:'125',
      userRole:'admin',
      userImg:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWUnbM5sUQpCzD508NF_T6hyRPxgAWxm-Oog&s`
    },
    {
      userName:'maxwell',
      userId:'126',
      userRole:'candidate',
      userImg:`https://media.gettyimages.com/id/1253331554/photo/royal-challengers-bangalores-glenn-maxwell-celebrates-after-scoring-a-half-century-during-the.jpg?s=612x612&w=gi&k=20&c=IPO56i57s3yr0-79CKTdZSMMc9gNblzKWLkIg6QxHpw=`
    }
  ]

  fetchAllUser():Array<Iuser>{
    return this.userArr
  }

  getUserInfo(id:string):Iuser{
    return this.userArr.find(user=>user.userId===id)!
  }

  addUser(user:Iuser){
    this.userArr.push(user);
    this._Router.navigate(['user']);
  }

  onUpdateUser(user:Iuser){
    let getIndex=this.userArr.findIndex(userObj=>userObj.userId===user.userId);

    this.userArr[getIndex]=user;
    this._Router.navigate(['user']);
  }

  onRemoveUser(user:Iuser){
    let getIndex=this.userArr.findIndex(userObj=>userObj.userId===user.userId);

    this.userArr.splice(getIndex,1);
    this._Router.navigate(['user']);
  }
}
