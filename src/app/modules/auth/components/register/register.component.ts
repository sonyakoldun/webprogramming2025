import { Component, OnInit } from "@angular/core"
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"
import { Router } from "@angular/router"
import { AuthService } from "../../../../services/auth.service"
import {ErrorMessageComponent} from '../../../../shared/components/error-message/error-message.component';
import {NgIf} from '@angular/common';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
  imports: [
    ReactiveFormsModule,
    ErrorMessageComponent,
    NgIf
  ],
  standalone: true
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup
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
    this.registerForm = this.fb.group(
      {
        name: ["", [Validators.required, Validators.minLength(3)]],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required],
      },
      { validators: this.passwordMatchValidator },
    )
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get("password")?.value
    const confirmPassword = form.get("confirmPassword")?.value

    return password === confirmPassword ? null : { passwordMismatch: true }
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return
    }

    this.errorMessage = ""

    const { name, email, password } = this.registerForm.value

    this.authService.register({ name, email, password }).subscribe({
      next: () => {
        this.router.navigate(["/"])
      },
      error: (error) => {
        this.errorMessage = error.message || "Registration failed. Please try again."
      },
    })
  }
}
