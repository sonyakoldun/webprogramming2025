import { Component } from "@angular/core"
import { Skill } from "../../models/profile.model"
import {SectionTitleComponent} from '../../shared/components/section-title/section-title.component';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  imports: [
    SectionTitleComponent,
    NgClass,
    NgForOf
  ],
  standalone: true
})
export class SkillsComponent {
  isSkillsVisible = true

  skillsLeft: Skill[] = [
    { name: "Adobe Photoshop", level: 70 },
    { name: "Microsoft Word", level: 80 },
    { name: "HTML-5/CSS-3", level: 90 },
  ]

  skillsRight: Skill[] = [
    { name: "Adobe Illustrator", level: 75 },
    { name: "Microsoft Powerpoint", level: 85 },
  ]

  toggleSkills(): void {
    this.isSkillsVisible = !this.isSkillsVisible
  }
}
