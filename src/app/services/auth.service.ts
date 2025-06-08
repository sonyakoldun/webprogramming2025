import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { BehaviorSubject, Observable, catchError, tap, throwError } from "rxjs"
import { environment } from "../../environments/environment"
import { Router } from "@angular/router"

export interface User {
  id: string
  email: string
  name: string
  token: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  name: string
  email: string
  password: string
}

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private apiUrl = environment.apiUrl
  private tokenKey = "auth_token"
  private userSubject = new BehaviorSubject<User | null>(null)
  private loggedInSubject = new BehaviorSubject<boolean>(false)

  user$ = this.userSubject.asObservable()
  isLoggedIn$ = this.loggedInSubject.asObservable()

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.checkToken()
  }

  private checkToken(): void {
    const token = localStorage.getItem(this.tokenKey)
    if (token) {
      // For demo purposes, we'll just set logged in to true
      // In a real app, you would validate the token with the server
      this.loggedInSubject.next(true)

      // Mock user data
      const user: User = {
        id: "1",
        email: "user@example.com",
        name: "Demo User",
        token: token,
      }
      this.userSubject.next(user)
    }
  }

  login(credentials: LoginRequest): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/auth/login`, credentials).pipe(
      tap((user) => {
        localStorage.setItem(this.tokenKey, user.token)
        this.userSubject.next(user)
        this.loggedInSubject.next(true)
      }),
      catchError(this.handleError),
    )
  }

  register(userData: RegisterRequest): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/auth/register`, userData).pipe(
      tap((user) => {
        localStorage.setItem(this.tokenKey, user.token)
        this.userSubject.next(user)
        this.loggedInSubject.next(true)
      }),
      catchError(this.handleError),
    )
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey)
    this.userSubject.next(null)
    this.loggedInSubject.next(false)
    this.router.navigate(["/"])
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey)
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
