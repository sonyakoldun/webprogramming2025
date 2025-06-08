import { Component, Input } from "@angular/core"
import {NgClass} from '@angular/common';

@Component({
  selector: "app-icon",
  templateUrl: "./icon.component.html",
  imports: [
    NgClass
  ],
  standalone: true
})
export class IconComponent {
  @Input() name = ""
  @Input() isRightSide = false
}
