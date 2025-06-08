import { Component, OnInit } from "@angular/core"
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors, ReactiveFormsModule,
} from "@angular/forms"
import { HttpClient } from "@angular/common/http"
import { environment } from "../../../../../environments/environment"
import {ErrorMessageComponent} from '../../../../shared/components/error-message/error-message.component';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.scss"],
  imports: [
    ReactiveFormsModule,
    ErrorMessageComponent,
    NgIf,
    NgForOf
  ],
  standalone: true
})
export class ReactiveFormComponent implements OnInit {
  subscriptionForm!: FormGroup
  submitted = false
  errorMessage = ""
  successMessage = ""

  plans = [
    { id: "basic", name: "Basic Plan", price: 9.99 },
    { id: "standard", name: "Standard Plan", price: 19.99 },
    { id: "premium", name: "Premium Plan", price: 29.99 },
  ]

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.subscriptionForm = this.fb.group({
      personalInfo: this.fb.group({
        firstName: ["", [Validators.required, Validators.minLength(2)]],
        lastName: ["", [Validators.required, Validators.minLength(2)]],
        email: ["", [Validators.required, Validators.email]],
      }),
      plan: ["standard", Validators.required],
      paymentInfo: this.fb.group({
        cardNumber: ["", [Validators.required, Validators.pattern(/^\d{16}$/)]],
        expiryDate: [
          "",
          [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/), this.validateExpiryDate],
        ],
        cvv: ["", [Validators.required, Validators.pattern(/^\d{3,4}$/)]],
      }),
      terms: [false, Validators.requiredTrue],
    })
  }

  validateExpiryDate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null
    }

    const [month, year] = control.value.split("/")
    const expiryDate = new Date(2000 + Number.parseInt(year, 10), Number.parseInt(month, 10) - 1)
    const today = new Date()

    if (expiryDate < today) {
      return { expired: true }
    }

    return null
  }

  onSubmit(): void {
    this.submitted = true

    if (this.subscriptionForm.invalid) {
      return
    }

    this.errorMessage = ""
    this.successMessage = ""

    this.http.post(`${environment.apiUrl}/subscribe`, this.subscriptionForm.value).subscribe({
      next: () => {
        this.successMessage = "Your subscription has been processed successfully!"
        this.resetForm()
      },
      error: (error) => {
        this.errorMessage = error.message || "Failed to process subscription. Please try again."
      },
    })
  }

  resetForm(): void {
    this.subscriptionForm.reset({
      plan: "standard",
      terms: false,
    })
    this.submitted = false
  }

  get personalInfo() {
    return this.subscriptionForm.get("personalInfo") as FormGroup
  }

  get paymentInfo() {
    return this.subscriptionForm.get("paymentInfo") as FormGroup
  }
}
