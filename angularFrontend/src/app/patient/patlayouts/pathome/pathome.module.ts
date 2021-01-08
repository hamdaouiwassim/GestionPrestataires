import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathomeComponent } from './pathome.component';
import { PatsharedModule } from 'src/app/patient/patshared/patshared.module';

import { PatconsultationComponent } from 'src/app/patient/patModules/patconsultation/patconsultation.component';
import { PatmessageComponent } from 'src/app/patient/patModules/patmessage/patmessage.component';
import { PatrdvComponent } from 'src/app/patient/patModules/patrdv/patrdv.component';
import { PatprofileComponent } from 'src/app/patient/patModules/patprofile/patprofile.component';
import { PatdashboardComponent } from 'src/app/patient/patModules/patdashboard/patdashboard.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
@NgModule({
  declarations: [
    PathomeComponent,
    PatconsultationComponent,
    PatmessageComponent,
    PatrdvComponent,
    PatprofileComponent,
    PatdashboardComponent
  ],
  imports: [
    CommonModule,
    PatsharedModule,
    RouterModule,
    MatSidenavModule
  ]
})
export class PathomeModule { }
