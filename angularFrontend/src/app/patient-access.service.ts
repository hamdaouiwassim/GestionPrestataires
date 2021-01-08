import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class PatientAccessService implements CanActivate {
 
  constructor(private _router:Router ) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {

      //check some condition  
      if ( localStorage.getItem('userRole') !="patient"  ){
        this._router.navigate(['/login']);
      }
      return true;
  }

}
