import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {    
  }
  
  title = 'Token Based Authentication Test';
  
  OnLogout(){    
      localStorage.removeItem("jwt");
      this.router.navigate(['/singIn']);    
  }
}