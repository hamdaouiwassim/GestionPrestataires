import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminhomeComponent } from './adminhome.component';
import { AdminsharedModule } from 'src/app/admin/adminshared/adminshared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { AdmindashboardComponent } from 'src/app/admin/adminModules/admindashboard/admindashboard.component';
import { CliniqueComponent } from 'src/app/admin/adminModules/clinique/clinique.component';
import { HopitalComponent } from 'src/app/admin/adminModules/hopital/hopital.component';
import { LaboratoireComponent } from 'src/app/admin/adminModules/laboratoire/laboratoire.component';
import { DoctorsComponent } from 'src/app/admin/adminModules/doctors/doctors.component';
import { GouvernoratComponent } from 'src/app/admin/adminModules/gouvernorat/gouvernorat.component';
import { SpecialityComponent } from 'src/app/admin/adminModules/speciality/speciality.component';


@NgModule({
  declarations: [
    AdminhomeComponent,
    AdmindashboardComponent,
    CliniqueComponent,
    HopitalComponent,
    DoctorsComponent,
    GouvernoratComponent,
    SpecialityComponent,
    LaboratoireComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    AdminsharedModule
  ]
})
export class AdminhomeModule { }
