import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DynamicChartComponent } from './components/dynamic-chart/dynamic-chart.component';
import { HistoryLineComponent } from './components/history-line/history-line.component';
import { CryptosTableComponent } from './components/cryptos-table/cryptos-table.component';
import { ErorPageComponent } from './pages/eror-page/eror-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { CryptosPageComponent } from './pages/cryptos-page/cryptos-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    DynamicChartComponent,
    HistoryLineComponent,
    CryptosTableComponent,
    ErorPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    CryptosPageComponent,
    UsersPageComponent,
    DashboardComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
