import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const token = typeof localStorage !== 'undefined' ? localStorage.getItem('authToken') : null;
  const authReq = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;
  const toastr = inject(ToastrService);

  return next(authReq).pipe(
    catchError((err: HttpErrorResponse) => {
      console.error('HTTP error:', err.status, err.message);
      try {
        toastr?.error(err?.error?.message || 'An unexpected error occurred', `Error ${err.status}`, { timeOut: 5000 });
      } catch {}
      return throwError(() => err);
    })
  );
};
