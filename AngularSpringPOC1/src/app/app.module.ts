import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonService } from './shared/common.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from './header/header.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContactUsComponent,
    AboutUsComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HeaderModule

    
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
