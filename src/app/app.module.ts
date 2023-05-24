import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { StatesModule } from './core/states/states.module';
import { PipeModule } from './shared/pipe/pipe.module';
import { CoreModule } from './core/core.module';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [AppComponent, ContentLayoutComponent, LoginLayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    // StatesModule,
    PipeModule,
    CoreModule,

  ],
  providers: [
    AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
