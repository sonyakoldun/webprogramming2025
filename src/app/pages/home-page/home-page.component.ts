import { Component } from "@angular/core"
import {MainContentComponent} from '../../components/main-content/main-content.component';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';
import {HeaderComponent} from '../../components/header/header.component';

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  imports: [
    MainContentComponent,
    SidebarComponent,
    HeaderComponent
  ],
  standalone: true
})
export class HomePageComponent {}
