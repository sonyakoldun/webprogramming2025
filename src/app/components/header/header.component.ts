import { Component, OnInit } from "@angular/core"
import { ProfileService } from "../../services/profile.service"
import { Profile } from "../../models/profile.model"
import {SectionTitleComponent} from '../../shared/components/section-title/section-title.component';
import {NgClass} from '@angular/common';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  imports: [
    SectionTitleComponent,
    NgClass
  ],
  standalone: true
})
export class HeaderComponent implements OnInit {
  profile: Profile | null = null
  isAboutVisible = true

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfileData().subscribe((data) => {
      console.log('data',data)
      this.profile = data
    })
  }

  toggleAbout(): void {
    this.isAboutVisible = !this.isAboutVisible
  }
}
