import { Component, OnInit } from "@angular/core"
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"
import {Router, RouterLink} from "@angular/router"
import { AuthService } from "../../../../services/auth.service"
import {ErrorMessageComponent} from '../../../../shared/components/error-message/error-message.component';
import {NgIf} from '@angular/common';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  imports: [
    ErrorMessageComponent,
    ReactiveFormsModule,
    NgIf,
    RouterLink
  ],
  standalone: true
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  errorMessage = ""

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return
    }

    this.errorMessage = ""

    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        this.router.navigate(["/"])
      },
      error: (error) => {
        this.errorMessage = error.message || "Login failed. Please try again."
      },
    })
  }
}
