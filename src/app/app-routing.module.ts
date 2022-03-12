import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Admin/Admin.component';

import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:'',component:AdminComponent,children:[{path:'',component:LoginComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
