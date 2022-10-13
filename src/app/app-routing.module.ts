import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminUserRetrieveComponent } from './admin-user-retrieve/admin-user-retrieve.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { FindUserComponent } from './find-user/find-user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

const routes: Routes = [

  {path:"login",component:LoginComponent},
  {path:"adminHome",component:AdmindashboardComponent,children:[
    {path:"addUser",component:AddUserComponent},
    {path:"findAllUser",component:AdminUserRetrieveComponent},
    {path:"findUserByuadhar",component:FindUserComponent}
  ]},
  {path:"userHome",component:UserdashboardComponent},
  {path:"signUp",component:SignupComponent},

  {path:"",redirectTo:"login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }