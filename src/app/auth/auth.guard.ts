import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Auth } from 'aws-amplify';
import { AmplifyService } from "aws-amplify-angular";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  private signedIn: boolean = false;
  constructor(private amplifyService: AmplifyService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let url: string = state.url;

    return this.checkLogin(url);
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.canActivate(next, state);
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    let url = `/${route.path}`;

    return this.checkLogin(url);
  }

  checkLogin(url: string): Promise<boolean> {
    return new Promise((resolve) => {
      Auth.currentAuthenticatedUser({
          bypassCache: false
        })
        .then((user) => {
          if(user){
            resolve(true);
          }
        })
        .catch(() => {
          this.router.navigate(['/login']);
          resolve(false);
        });
    });
  }
}
