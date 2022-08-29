import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AdminHomeComponent } from './Components/Admin/admin-home/admin-home.component';
import { UserHomeComponent } from './Components/User/user-home/user-home.component';
import { UserNavBarComponent } from './Components/User/user-nav-bar/user-nav-bar.component';
import { AdminNavBarComponent } from './Components/Admin/admin-nav-bar/admin-nav-bar.component';
import { HomeNavBarComponent } from './Components/home/home-nav-bar/home-nav-bar.component';
import { LoginComponent } from './Components/home/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegisterComponent } from './Components/User/user-register/user-register.component';
import { UserPasswordRecoveryComponent } from './Components/User/user-password-recovery/user-password-recovery.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'userPasswordRecovery', component: UserPasswordRecoveryComponent },
  { path: 'user-register', component: UserRegisterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminHomeComponent,
    UserHomeComponent,
    UserNavBarComponent,
    AdminNavBarComponent,
    HomeNavBarComponent,
    LoginComponent,
    UserRegisterComponent,
    UserPasswordRecoveryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
