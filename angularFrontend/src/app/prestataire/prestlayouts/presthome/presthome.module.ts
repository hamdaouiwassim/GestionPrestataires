import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresthomeComponent } from './presthome.component';
import { PrestataireDashboardComponent } from 'src/app/prestataire/prestModules/prestataire-dashboard/prestataire-dashboard.component';
import { PrestataireConsultationComponent } from 'src/app/prestataire/prestModules/prestataire-consultation/prestataire-consultation.component';
import { PrestataireMessageComponent } from 'src/app/prestataire/prestModules/prestataire-message/prestataire-message.component';
import { PrestataireRdvComponent } from 'src/app/prestataire/prestModules/prestataire-rdv/prestataire-rdv.component';
import { PrestprofileComponent } from 'src/app/prestataire/prestModules/prestprofile/prestprofile.component';
import { PrestsharedModule } from 'src/app/prestataire/prestshared/prestshared.module';
import { PatientsComponent } from 'src/app/prestataire/prestModules/patients/patients.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    PresthomeComponent,
    PrestataireDashboardComponent,
    PrestataireRdvComponent,
    PrestataireConsultationComponent,
    PrestataireMessageComponent,
    PrestprofileComponent,
    PatientsComponent
],
  imports: [
    CommonModule,
    RouterModule,
    PrestsharedModule,
    MatSidenavModule
  ]
})
export class PresthomeModule { }
