import { Component } from "@angular/core"
import {SectionTitleComponent} from '../../shared/components/section-title/section-title.component';
import {NgClass} from '@angular/common';

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  imports: [
    SectionTitleComponent,
    NgClass
  ],
  standalone: true
})
export class ContactComponent {
  isContactVisible = true

  toggleContact(): void {
    this.isContactVisible = !this.isContactVisible
  }
}
