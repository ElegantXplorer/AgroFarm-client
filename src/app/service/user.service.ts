import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseCreateUserURL = "http://localhost:8080/register";

  baseLoginURL = "http://localhost:8080/login";

  constructor(private http:HttpClient) { }

  createNewUser(user:User):Observable<Object>{
    return this.http.post(`${this.baseCreateUserURL}`,user);
  }

  // logIn(emailId:string,password:string):Observable<User>{
  //   return this.http.get<User>(`${this.baseLoginURL}/${emailId}/${password}`);
  // }
  // logIn(user:any):Observable<Object>{
  //   return this.http.post(`${this. baseLoginURL}`, user);
  // }

  logIn(email:any,password:any):Observable<Object>{
    return this.http.post(`${this. baseLoginURL}`, {"emailId":email,"password":password});
  }
  // changes made

}
