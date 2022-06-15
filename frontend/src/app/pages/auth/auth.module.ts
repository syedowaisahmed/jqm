import { NgModule } from '@angular/core';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegistrationThanksComponent } from './registration-thanks/registration-thanks.component';

@NgModule({
  imports: [
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegistrationThanksComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    RegistrationThanksComponent
  ]
})
export class AuthModule { }
