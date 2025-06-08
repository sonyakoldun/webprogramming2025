import { Component } from "@angular/core"
import { Education } from "../../models/profile.model"
import {SectionTitleComponent} from '../../shared/components/section-title/section-title.component';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  imports: [
    SectionTitleComponent,
    NgForOf,
    NgClass
  ],
  standalone: true
})
export class EducationComponent {
  isEducationVisible = true

  education: Education[] = [
    {
      institution: "Stanford University",
      degree: "Master Degree Graduate",
      period: "2011 - 2013",
    },
    {
      institution: "University of Chicago",
      degree: "Bachelor Degree Graduate",
      period: "2007 - 2010",
    },
  ]

  toggleEducation(): void {
    this.isEducationVisible = !this.isEducationVisible
  }
}
