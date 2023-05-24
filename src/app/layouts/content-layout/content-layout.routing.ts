import { Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/auth-guard.service';
import { ErrorComponent } from 'src/app/pages/error/error.component';
import { HomeComponent } from 'src/app/pages/home/home.component';


export const ContentLayoutRoutes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'error/404',
    component: ErrorComponent,
  },
];
