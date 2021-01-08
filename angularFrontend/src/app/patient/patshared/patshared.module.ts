import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './patcomponents/sidebar/sidebar.component';
import { HeaderComponent } from './patcomponents/header/header.component';
import { FooterComponent } from './patcomponents/footer/footer.component';
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

@NgModule({
  declarations: [
    SidebarComponent,
     HeaderComponent,
      FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatMenuModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    SidebarComponent,
     HeaderComponent,
      FooterComponent,
      FormsModule,
      ReactiveFormsModule],
})
export class PatsharedModule { }
