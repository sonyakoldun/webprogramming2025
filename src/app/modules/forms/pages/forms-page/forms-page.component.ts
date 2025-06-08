import { Component } from "@angular/core"
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: "app-forms-page",
  templateUrl: "./forms-page.component.html",
  styleUrls: ["./forms-page.component.scss"],
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  standalone: true
})
export class FormsPageComponent {}
