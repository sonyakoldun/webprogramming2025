import { Component, Input } from "@angular/core"
import {NgIf} from '@angular/common';

@Component({
  selector: "app-error-message",
  templateUrl: "./error-message.component.html",
  styleUrls: ["./error-message.component.scss"],
  imports: [
    NgIf
  ],
  standalone: true
})
export class ErrorMessageComponent {
  @Input() message = ""
  @Input() showClose = true

  isVisible = true

  closeMessage(): void {
    this.isVisible = false
  }
}
