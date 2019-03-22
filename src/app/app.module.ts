import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component'
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'admin',
          component: AdminComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'dashboard',
          component: DashboardComponent  
        },
        {
          path: 'register',
          component: RegisterComponent
        },
        {
          path: '',
          component: HomeComponent    
      }
     ])
  ],
  providers: [AuthService , AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
