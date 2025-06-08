import { Component } from "@angular/core"
import {ExperienceComponent} from '../experience/experience.component';
import {LanguageHobbiesComponent} from '../language-hobbies/language-hobbies.component';
import {SkillsComponent} from '../skills/skills.component';

@Component({
  selector: "app-main-content",
  templateUrl: "./main-content.component.html",
  imports: [
    ExperienceComponent,
    LanguageHobbiesComponent,
    SkillsComponent
  ],
  standalone: true
})
export class MainContentComponent {}
