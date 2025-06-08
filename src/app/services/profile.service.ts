import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { type Observable, catchError, throwError } from "rxjs"
import { Profile } from "../models/profile.model"
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) {}

  getProfileData(): Observable<Profile> {
    return this.http.get<Profile>(`/assets/data/data.json`).pipe(catchError(this.handleError))
  }

  updateProfile(profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(`${this.apiUrl}/profile`, profile).pipe(catchError(this.handleError))
  }

  private handleError(error: any) {
    let errorMessage = "An unknown error occurred!"
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
    }
    return throwError(() => new Error(errorMessage))
  }
}
