import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAccessService implements CanActivate {
 
  constructor(private _router:Router ) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {

      //check some condition  
    
      if ( localStorage.getItem('userRole') !="admin"  ){
        this._router.navigate(['/login']);
      }
      return true;
  }

}

