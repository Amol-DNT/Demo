import { Injectable } from '@angular/core';
import { LoginUser } from './login-user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  apiUrl = "https://mysitebuilder20200613144934.azurewebsites.net/api/login";

  constructor(private http: HttpClient) { }

  login(userName: string, password: string){
      return this.http.get(this.apiUrl+"?username="+userName+"&Password="+password);
  }

  register(loginUser: LoginUser) 
  {
    this.http.post(this.apiUrl, loginUser).subscribe(data  => {
      console.log("POST Request is successful", data);
    },
    error  => {
      console.log("Error", error);
    }
  );
  } 
}
