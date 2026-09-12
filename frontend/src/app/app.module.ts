import { NgModule } from '@angular/core';

import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmicalComponent } from './emical/emical.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EmicalComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
 
  
  

  ],
  providers: [

    provideHttpClient(withFetch())
    
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
