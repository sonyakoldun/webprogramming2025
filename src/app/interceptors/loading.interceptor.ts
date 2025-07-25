import { Injectable } from "@angular/core"
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http"
import { Observable, finalize } from "rxjs"
import { LoadingService } from "../services/loading.service"

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private activeRequests = 0

  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.activeRequests === 0) {
      this.loadingService.setLoading(true)
    }

    this.activeRequests++

    return next.handle(request).pipe(
      finalize(() => {
        this.activeRequests--

        if (this.activeRequests === 0) {
          this.loadingService.setLoading(false)
        }
      }),
    )
  }
}
