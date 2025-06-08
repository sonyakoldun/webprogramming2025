import { Component } from "@angular/core"
import { LoadingService } from "./services/loading.service"
import {NavbarComponent} from './components/navbar/navbar.component';
import {LoadingSpinnerComponent} from './shared/components/loading-spinner/loading-spinner.component';
import {AsyncPipe, NgIf} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: true,
  imports: [
    NavbarComponent,
    LoadingSpinnerComponent,
    NgIf,
    RouterOutlet,
    FooterComponent,
    AsyncPipe
  ]
})
export class AppComponent {
  title = "resume-app"

  constructor(public loadingService: LoadingService) {}
}
