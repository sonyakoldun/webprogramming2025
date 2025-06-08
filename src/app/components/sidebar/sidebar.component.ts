import { Component } from "@angular/core"
import {ContactComponent} from '../contact/contact.component';
import {EducationComponent} from '../education/education.component';
import {ReferencesComponent} from '../references/references.component';

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  imports: [
    ContactComponent,
    EducationComponent,
    ReferencesComponent
  ],
  standalone: true
})
export class SidebarComponent {}
