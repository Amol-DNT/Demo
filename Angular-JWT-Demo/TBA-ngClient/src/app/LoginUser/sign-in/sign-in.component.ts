import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginUserService } from '../login-user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  LoginUserForm = new FormGroup({    
    UserName: new FormControl(''),
    Password: new FormControl('')
  });

  constructor(private loginUserService : LoginUserService, private router: Router) { }

  ngOnInit(): void {
  }

  isError: boolean;

  OnSubmit(){
    //console.log( this.loginUserService.login(this.LoginUserForm.value["UserName"],this.LoginUserForm.value["Password"] ));
    //console.log(this.LoginUserForm.value["UserName"],this.LoginUserForm.value["Password"] );
    this.loginUserService.login(this.LoginUserForm.value["UserName"],this.LoginUserForm.value["Password"])
      .subscribe((data:any) => 
      {
        console.log(data.tokenInfo);
        localStorage.setItem("jwt", data.tokenInfo);
        this.router.navigate(['/products']);          
      },
      (error: HttpErrorResponse) =>
      {
        this.isError = true;
      }); 
  }    
}