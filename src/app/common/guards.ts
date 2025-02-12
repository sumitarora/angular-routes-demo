import { inject } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanDeactivateFn,
  CanMatchFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { PermissionsService } from './services';

export const canDeactivateMemberAndMatch: CanDeactivateFn<any> = (
  component: any,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState?: RouterStateSnapshot
) => {
  return true;
};

export const canDeactivateTeam: CanDeactivateFn<any> = (
  component: any,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState?: RouterStateSnapshot
) => {
  return (
    (component && component.canDeactivate && component.canDeactivate()) || false
  );
};

export const activateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  return true;
};

export const canActivateTeam: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  console.log(route, state);
  const permissionsService = inject(PermissionsService);
  const router = inject(Router);
  return permissionsService.canActivate(route.params['teamId'])
    ? true
    : router.navigate(['/feature/team/forbidden']);
};

export const canMatchTeam: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  const activeRoute = inject(ActivatedRoute);
  const router = inject(Router);

  console.log(route, segments[1].path, activeRoute);
  const permissionsService = inject(PermissionsService);
  return permissionsService.canMatch(segments[1].path)
    ? true
    : router.navigate(['/feature/team/forbidden']);
};
