import { Routes } from '@angular/router';
import { canActivateAuthRole } from './auth/auth.guard';
import { SuitsComponent } from './suits-module/suits/suits.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { SuitComponent } from './suits-module/suit/suit.component';

export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'suits',
    component: SuitsComponent,
    canActivate: [canActivateAuthRole],
    data: { role: 'astronaut' },
  },
  {
    path: 'suits/:suitId',
    component: SuitComponent,
    canActivate: [canActivateAuthRole],
    data: { role: 'astronaut' },
  },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'logout', component: LogoutComponent },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [canActivateAuthRole],
    data: { role: 'astronaut' },
  },
  { path: '**', component: NotFoundComponent },
];
