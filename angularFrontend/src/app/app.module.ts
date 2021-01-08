import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//annuaire
import { HomeComponent } from './annuaire/home/home.component';
import { HeaderComponent } from './annuaire/header/header.component';
import { FooterComponent } from './annuaire/footer/footer.component';
import { LoginComponent } from './annuaire/login/login.component';
import { PatregisterComponent } from './annuaire/patregister/patregister.component';
import { PerstregisterComponent } from './annuaire/perstregister/perstregister.component';
import { ContenuComponent } from './annuaire/contenu/contenu.component';
import { ListComponent } from './annuaire/list/list.component';
import {  PresthomeModule } from './prestataire/prestlayouts/presthome/presthome.module';
import {  AdminhomeModule } from './admin/adminlayouts/adminhome/adminhome.module';
import { PathomeModule } from './patient/patlayouts/pathome/pathome.module';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PharmacieComponent } from './admin/adminModules/pharmacie/pharmacie.component';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PatregisterComponent,
    PerstregisterComponent,
    ContenuComponent,
    ListComponent,
    PharmacieComponent
],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    PresthomeModule,
    AdminhomeModule,
    PathomeModule,
    ModalModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
