import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './prestcomponents/sidebar/sidebar.component';
import { HeaderComponent } from './prestcomponents/header/header.component';
import { FooterComponent } from './prestcomponents/footer/footer.component';


@NgModule({
  declarations: [

    SidebarComponent,
    HeaderComponent,
    FooterComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    MatSidenavModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,FormsModule, 
    ReactiveFormsModule
  ]
  })
export class PrestsharedModule { }
