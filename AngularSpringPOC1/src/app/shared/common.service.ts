import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
url:string="http://localhost:3000/User";

  constructor(private _httpclient:HttpClient) { }
   getuserlist():Observable<User[]>
   {
     return this._httpclient.get<User[]>("http://localhost:9090/allData")
   }
  deleteuser(userid:number):Observable<number>
  {
     return this._httpclient.delete<number>("http://localhost:9090/deleteUser"+"/"+userid);
  }

  getuserList():Observable<User[]>
  {
     return this._httpclient.get<User[]>("http://localhost:9090/allData");
  }

  getUser(userid:number):Observable<User>
  {
    return this._httpclient.get<User>("http://localhost:9090/editData"+"/"+userid);
  }
  updateUser(u:User):Observable<User>
  {
    return this._httpclient.put<User>("http://localhost:9090/updateData",u)
  }
  
  UserSave(u:User):Observable<User>
  {
    return this._httpclient.post<User>("http://localhost:9090/register",u)
  }
  
}
 