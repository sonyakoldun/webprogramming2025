import { Component, OnInit } from "@angular/core"
import { AuthService, User } from "../../../../services/auth.service"
import {EditProfileComponent} from '../../components/edit-profile/edit-profile.component';
import {NgIf} from '@angular/common';

@Component({
  selector: "app-profile-page",
  templateUrl: "./profile-page.component.html",
  styleUrls: ["./profile-page.component.scss"],
  imports: [
    EditProfileComponent,
    NgIf
  ],
  standalone: true
})
export class ProfilePageComponent implements OnInit {
  user: User | null = null
  isEditing = false

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      this.user = user
    })
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing
  }
}
