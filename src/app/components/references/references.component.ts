import { Component } from "@angular/core"
import { Reference } from "../../models/profile.model"
import {SectionTitleComponent} from '../../shared/components/section-title/section-title.component';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: "app-references",
  templateUrl: "./references.component.html",
  imports: [
    SectionTitleComponent,
    NgClass,
    NgForOf
  ],
  standalone: true
})
export class ReferencesComponent {
  isReferencesVisible = true

  references: Reference[] = [
    {
      name: "Darwin B. Magana",
      address: "2813 Shobe Lane Mancos, CO.",
      phone: "+1-970-533-3393",
      email: "www.yourwebsite.com",
    },
    {
      name: "Robert J. Belvin",
      address: "2119 Fairfax Drive Newark, NJ.",
      phone: "+1-908-987-5103",
      email: "www.yourwebsite.com",
    },
  ]

  toggleReferences(): void {
    this.isReferencesVisible = !this.isReferencesVisible
  }
}
