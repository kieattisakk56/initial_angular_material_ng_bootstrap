import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginLayoutRoutes } from './login-layout.routing';
import { RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/page_authen/login/login.component';
import { MsAuthorizationComponent } from 'src/app/page_authen/ms-authorization/ms-authorization.component';
import player from 'lottie-web';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPassComponent } from 'src/app/page_authen/login-pass/login-pass.component';
import { FormlyModule } from '@ngx-formly/core';
import { CustomInputComponent } from 'src/app/components/formly/fields/custom-input/custom-input.component';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    LoginComponent,
    LoginPassComponent,
    MsAuthorizationComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LoginLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    
    FormlyMaterialModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'CustomInput',
          component: CustomInputComponent,
        },
      ]
    }),

    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ],
})
export class LoginLayoutModule { }
