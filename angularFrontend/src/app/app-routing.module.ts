import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrestataireDashboardComponent } from './prestataire/prestModules/prestataire-dashboard/prestataire-dashboard.component';
import { PrestataireMessageComponent } from './prestataire/prestModules/prestataire-message/prestataire-message.component';
import { PrestataireRdvComponent } from './prestataire/prestModules/prestataire-rdv/prestataire-rdv.component';
import { PrestprofileComponent } from './prestataire/prestModules/prestprofile/prestprofile.component';
import { PrestataireConsultationComponent } from './prestataire/prestModules/prestataire-consultation/prestataire-consultation.component';
import { PresthomeComponent } from './prestataire/prestlayouts/presthome/presthome.component';
import { PatientsComponent } from './prestataire/prestModules/patients/patients.component';

import { PatdashboardComponent } from './patient/patModules/patdashboard/patdashboard.component';
import { PatprofileComponent } from './patient/patModules/patprofile/patprofile.component';
import { PatmessageComponent } from './patient/patModules/patmessage/patmessage.component';
import { PatrdvComponent } from './patient/patModules/patrdv/patrdv.component';
import { PatconsultationComponent } from './patient/patModules/patconsultation/patconsultation.component';
import { PathomeComponent } from './patient/patlayouts/pathome/pathome.component';

import { AdminhomeComponent } from './admin/adminlayouts/adminhome/adminhome.component';
import { AdmindashboardComponent } from './admin/adminModules/admindashboard/admindashboard.component';
import { GouvernoratComponent } from './admin/adminModules/gouvernorat/gouvernorat.component';
import { SpecialityComponent } from './admin/adminModules/speciality/speciality.component';
import { CliniqueComponent } from './admin/adminModules/clinique/clinique.component';
import { LaboratoireComponent } from './admin/adminModules/laboratoire/laboratoire.component';
import { HopitalComponent } from './admin/adminModules/hopital/hopital.component';
import { DoctorsComponent } from './admin/adminModules/doctors/doctors.component';


import { PatregisterComponent } from './annuaire/patregister/patregister.component';
import { PerstregisterComponent } from './annuaire/perstregister/perstregister.component';
import { ContenuComponent } from './annuaire/contenu/contenu.component';
import { HomeComponent } from './annuaire/home/home.component';
import { LoginComponent } from './annuaire/login/login.component';
import { ListComponent } from './annuaire/list/list.component';
import { DetailsPrestataireComponent } from './annuaire/details-prestataire/details-prestataire.component';
import { LoggedInService } from './logged-in.service';
import { PatientAccessService } from './patient-access.service';
import { AdminAccessService } from './admin-access.service';
import { PrestataireAccessService } from './prestataire-access.service';
import { PharmacieComponent } from './admin/adminModules/pharmacie/pharmacie.component';

const routes: Routes = [

  {path: '',
  component: ContenuComponent,
  children: [{
  path: '',
  component:HomeComponent
},
  {path: 'login',
  component:LoginComponent
},
{ path:'registerPatient',
    component:PatregisterComponent
},
{ path:'registerPrestataire',
     component:PerstregisterComponent
},
  { path:'list/:type/:gouvernourat',
  component:ListComponent
},

{path: 'prestataire/details/:id',
 component:DetailsPrestataireComponent,

}
  ]},


 {path: 'patHome',
  component: PathomeComponent,
  canActivate : [LoggedInService , PatientAccessService],
  children: [{
    path: 'patDashboard',
    component: PatdashboardComponent
  },
  {
    path: 'patProfile',
    component: PatprofileComponent
  },
  {
    path: 'patMessage',
    component: PatmessageComponent
  },
  {
    path: 'patRdv',
    component: PatrdvComponent
  },
  {
    path: 'patConsultation',
    component:PatconsultationComponent
  }
]},

{path: 'prestHome',
component: PresthomeComponent,
canActivate : [LoggedInService , PrestataireAccessService],
children: [{
  path: 'prestDashboard',
  component: PrestataireDashboardComponent
},
{
  path: 'patient',
  component: PatientsComponent
},
{
  path: 'prestMessage',
  component: PrestataireMessageComponent
},
{
  path: 'prestRdv',
  component:PrestataireRdvComponent
},
{
  path: 'prestProfile',
  component:PrestprofileComponent
},
{
  path: 'prestConsultation',
  component:PrestataireConsultationComponent
}
]},

  {path: 'adminHome',
  component: AdminhomeComponent,
  canActivate : [LoggedInService , AdminAccessService],
  children: [{
    path: 'adminDashboard',
    component: AdmindashboardComponent
  },

  {
    path: 'clinique',
    component: CliniqueComponent
  },
  {
    path: 'laboratoire',
    component: LaboratoireComponent
  },
  {
    path: 'hopital',
    component: HopitalComponent
  },
  {
    path: 'doctors',
    component: DoctorsComponent
  },
  {
    path: 'speciality',
    component:SpecialityComponent
  },
   {path: 'gouvernorat',
    component:GouvernoratComponent
  },
  {path: 'pharmacy',
    component:PharmacieComponent
  },
  
],
}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
