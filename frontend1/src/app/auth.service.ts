import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  apiUrl:String = 'http://localhost:3000/api'
  
  constructor(private http:HttpClient) { }


loginUser(user:any){

  return this.http.post<any>(`${this.apiUrl}/login`,user);
}
loggedIn(){
  return !! localStorage.getItem('token')
}
getToken(){
  return localStorage.getItem('token');
}
getUser()
{
  console.log(localStorage.getItem('user_type'))
  return localStorage.getItem('user_type')
}
}

