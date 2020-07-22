import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SignInComponent } from './LoginUser/sign-in/sign-in.component';
import { SignUpComponent } from './LoginUser/sign-up/sign-up.component';
import { AuthGuard } from './LoginUser/auth/auth.guard';


const routes: Routes = [
  {path : 'products', component: ProductsComponent, canActivate: [AuthGuard]},
  {path : 'dashbord', component: DashbordComponent, canActivate: [AuthGuard]},
  {path : 'singUp', component: SignUpComponent},
  {path : 'singIn', component: SignInComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
