import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginBaseComponent } from './login-base/login-base.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginBaseComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LoginModule { }
