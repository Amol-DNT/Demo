import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import { logging } from 'protractor';
import { LoginUserService } from '../login-user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  LoginUserForm = new FormGroup({
    FullName : new FormControl(''),
    DOB : new FormControl(''),
    Email : new FormControl(''),
    UserName : new FormControl(''),
    Password : new FormControl(''),
    ConfirmPassword : new FormControl('')
  });

  constructor(private loginUserService: LoginUserService) { }

  ngOnInit(): void {
  }

  OnSubmit(){
    this.loginUserService.register(this.LoginUserForm.value)
    //console.log(this.LoginUserForm.value)
  }

}