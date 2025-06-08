import { Component } from "@angular/core"
import { Experience } from "../../models/profile.model"
import {SectionTitleComponent} from '../../shared/components/section-title/section-title.component';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  imports: [
    SectionTitleComponent,
    NgClass,
    NgForOf
  ],
  standalone: true
})
export class ExperienceComponent {
  isExperienceVisible = true

  experiences: Experience[] = [
    {
      title: "Senior Web Designer",
      period: "2020 - Present",
      location: "Creative Agency / Chicago",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since 1500s, when unknown printer took a galley of type.",
    },
    {
      title: "Graphic Designer",
      period: "2015 - 2020",
      location: "Creative Market / Chicago",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since 1500s, when unknown printer took a galley of type.",
    },
    {
      title: "Marketing Manager",
      period: "2013 - 2015",
      location: "Manufacturing Agency / NJ",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since 1500s, when unknown printer took a galley of type.",
    },
  ]

  toggleExperience(): void {
    this.isExperienceVisible = !this.isExperienceVisible
  }
}
