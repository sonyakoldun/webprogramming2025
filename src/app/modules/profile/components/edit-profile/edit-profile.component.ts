import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core"
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"
import { HttpClient } from "@angular/common/http"
import { environment } from "../../../../../environments/environment"
import { User } from "../../../../services/auth.service"
import {ErrorMessageComponent} from '../../../../shared/components/error-message/error-message.component';
import {NgIf} from '@angular/common';

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.scss"],
  imports: [
    ReactiveFormsModule,
    ErrorMessageComponent,
    NgIf
  ],
  standalone: true
})
export class EditProfileComponent implements OnInit {
  @Input() user: User | null = null
  @Output() editComplete = new EventEmitter<void>()

  profileForm!: FormGroup
  errorMessage = ""
  successMessage = ""

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.profileForm = this.fb.group(
      {
        name: [this.user?.name || "", [Validators.required, Validators.minLength(3)]],
        email: [this.user?.email || "", [Validators.required, Validators.email]],
        currentPassword: ["", Validators.required],
        newPassword: ["", Validators.minLength(6)],
        confirmPassword: [""],
      },
      { validators: this.passwordMatchValidator },
    )
  }

  passwordMatchValidator(form: FormGroup) {
    const newPassword = form.get("newPassword")?.value
    const confirmPassword = form.get("confirmPassword")?.value

    if (!newPassword) {
      return null
    }

    return newPassword === confirmPassword ? null : { passwordMismatch: true }
  }

  onSubmit(): void {
    if (this.profileForm.invalid) {
      return
    }

    this.errorMessage = ""
    this.successMessage = ""

    this.http.post(`${environment.apiUrl}/profile/update`, this.profileForm.value).subscribe({
      next: () => {
        this.successMessage = "Profile updated successfully!"
        setTimeout(() => {
          this.editComplete.emit()
        }, 2000)
      },
      error: (error) => {
        this.errorMessage = error.message || "Failed to update profile. Please try again."
      },
    })
  }

}
