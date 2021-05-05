import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.guard';
import { CryptosPageComponent } from './pages/cryptos-page/cryptos-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ErorPageComponent } from './pages/eror-page/eror-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

const routes: Routes = [
  {path: 'login',  component: LoginPageComponent},
  {path: 'register',  component: RegisterPageComponent },
  {path: 'dashboard/cryptos',  component: CryptosPageComponent, canActivate: [AuthGuard] },
  {path: 'dashboard/users',  component: UsersPageComponent, canActivate: [AuthGuard] },
  {path: 'dashboard',  component: DashboardComponent, canActivate: [AuthGuard] },
  {path: '', pathMatch:'full', redirectTo:'login'},
  {path: '**', component: ErorPageComponent},
];

//TODO: ask why such routing approach doesn't work properly
// const routes: Routes = [
//   {path: 'login',  component: LoginPageComponent},
//   {path: 'register',  component: RegisterPageComponent},
//   {path: 'dashboard',  component: DashboardComponent,  
//   canActivate: [AuthGuard],
//       children:[
//       {path: 'cryptos',  component: CryptosPageComponent,   pathMatch: 'full',
//       canActivate: [AuthGuard]
//       }, 
//       {path: 'users',  component: UsersPageComponent,   pathMatch: 'full',
//       canActivate: [AuthGuard]
//       }, 
//       {path: '',  component: DashboardComponent, 
//       canActivate: [AuthGuard],   pathMatch: 'full',
//       }, 
//       ]
//   }, 
//   {path: '', pathMatch:'full', redirectTo:'login'},
//   {path: '**', component: ErorPageComponent},
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
