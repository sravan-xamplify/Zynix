import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const isLoggedIn = auth?.isUserEmailLoggedIn;
  return isLoggedIn ? true : router.parseUrl('/auth/login');
};
