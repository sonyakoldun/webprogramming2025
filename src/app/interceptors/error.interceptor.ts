import { Injectable } from "@angular/core"
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from "@angular/common/http"
import { Observable, catchError, throwError } from "rxjs"
import { Router } from "@angular/router"
import { AuthService } from "../services/auth.service"

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Unauthorized - clear token and redirect to login
          this.authService.logout()
          this.router.navigate(["/auth/login"])
        }

        return throwError(() => error)
      }),
    )
  }
}
