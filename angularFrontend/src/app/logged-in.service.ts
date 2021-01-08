import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class LoggedInService implements CanActivate {
 
  constructor(private _router:Router ) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {

      //check some condition  
      if (!localStorage.getItem('token'))  {
          this._router.navigate(['/login']);
          //alert('You are not allowed to view this page');
          //redirect to login/home page etc
          //return false to cancel the navigation
          //return false;
      } 
      return true;
  }

}
