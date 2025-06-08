import { Component } from "@angular/core"
import { Language, Hobby } from "../../models/profile.model"
import {SectionTitleComponent} from '../../shared/components/section-title/section-title.component';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: "app-language-hobbies",
  templateUrl: "./language-hobbies.component.html",
  imports: [
    SectionTitleComponent,
    NgClass,
    NgForOf
  ],
  standalone: true
})
export class LanguageHobbiesComponent {
  isLanguageVisible = true
  isHobbiesVisible = true

  languages: Language[] = [{ name: "English" }, { name: "French" }, { name: "Spanish" }, { name: "German" }]

  hobbies: Hobby[] = [{ name: "Reading Books" }, { name: "Traveling" }, { name: "Playing Chess" }]

  toggleLanguage(): void {
    this.isLanguageVisible = !this.isLanguageVisible
  }

  toggleHobbies(): void {
    this.isHobbiesVisible = !this.isHobbiesVisible
  }
}
