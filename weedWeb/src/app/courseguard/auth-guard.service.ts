import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Authservice } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private autoservice: Authservice, private router: Router) {}
  //Definicion del guardian y como se controla
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.autoservice.IsAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/Login']);
      return false;
    }
  }
}
