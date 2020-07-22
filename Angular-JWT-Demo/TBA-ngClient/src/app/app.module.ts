import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DashbordComponent } from './dashbord/dashbord.component'
import { HttpClientModule} from '@angular/common/http';
import { SignInComponent } from './LoginUser/sign-in/sign-in.component';
import { SignUpComponent } from './LoginUser/sign-up/sign-up.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailsComponent,
    DashbordComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
