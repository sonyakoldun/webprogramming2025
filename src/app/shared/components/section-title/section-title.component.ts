import { Component, EventEmitter, Input, Output } from "@angular/core"
import {NgClass} from '@angular/common';
import {IconComponent} from '../icon/icon.component';

@Component({
  selector: "app-section-title",
  templateUrl: "./section-title.component.html",
  imports: [
    NgClass,
    IconComponent
  ],
  standalone: true
})
export class SectionTitleComponent {
  @Input() icon = ""
  @Input() title = ""
  @Input() isVisible = true
  @Input() isRightSide = false

  @Output() toggleVisibility = new EventEmitter<void>()

  toggle(): void {
    this.toggleVisibility.emit()
  }
}
