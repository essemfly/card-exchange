import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register';
import { DashboardComponent } from './dashboard';
import { RequestComponent } from './request';
import { LoginComponent, SignUpComponent } from './login';
import { AppRoutingModule } from './app-routing.module';

import {
  MdButtonModule,
  MdCardModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdFormFieldModule,
  MdInputModule,
  MdRadioModule,
  MdTableModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    RequestComponent,
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdFormFieldModule,
    MdInputModule,
    MdRadioModule,
    MdTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
