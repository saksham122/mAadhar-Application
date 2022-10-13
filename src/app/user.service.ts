import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{User} from './user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string="http://localhost:9095/user"
  constructor(public http:HttpClient) { }
  storeUser(user:any):Observable<string>
  {
    return this.http.post(this.baseUrl+"/storeUser",user,{responseType:"text"});
  }

  updateUser(user:any):Observable<string>
  {
    return this.http.patch(this.baseUrl+"/updateUser",user,{responseType:"text"});
  }
  findAllUser():Observable<User[]>
  {
    return this.http.get<User[]>(this.baseUrl+"/findAllUser");
  }

  findAllUserByuadhar(uadhar:number):Observable<User[]>
  {
    return this.http.get<User[]>(this.baseUrl+"/findUserByuadhar/"+uadhar);
  }


  findAllUserById(uid:number):Observable<string>
  {
    return this.http.get(this.baseUrl+"/findUserByuid/"+uid,{responseType:"text"});
  }

  deleteUserById(uid:number):Observable<string>
  {
    return this.http.delete(this.baseUrl+"/deleteUserByuid/"+uid,{responseType:"text"});
  }


}