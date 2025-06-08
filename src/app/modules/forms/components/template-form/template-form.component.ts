import { Component } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { environment } from "../../../../../environments/environment"
import {FormsModule} from '@angular/forms';
import {ErrorMessageComponent} from '../../../../shared/components/error-message/error-message.component';
import {NgIf} from '@angular/common';

interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

@Component({
  selector: "app-template-form",
  templateUrl: "./template-form.component.html",
  styleUrls: ["./template-form.component.scss"],
  imports: [
    FormsModule,
    ErrorMessageComponent,
    NgIf
  ],
  standalone: true
})
export class TemplateFormComponent {
  model: ContactForm = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  }

  submitted = false
  errorMessage = ""
  successMessage = ""

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    this.submitted = true
    this.errorMessage = ""
    this.successMessage = ""

    this.http.post(`${environment.apiUrl}/contact`, this.model).subscribe({
      next: () => {
        this.successMessage = "Your message has been sent successfully!"
        this.resetForm()
      },
      error: (error) => {
        this.errorMessage = error.message || "Failed to send message. Please try again."
      },
    })
  }


  resetForm(): void {
    this.model = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    }
    this.submitted = false
  }
}
