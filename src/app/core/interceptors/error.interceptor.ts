import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      // TODO: inject a logger/toast service if needed.
      console.error('HTTP error:', err.status, err.message);
      return throwError(() => err);
    })
  );
};
