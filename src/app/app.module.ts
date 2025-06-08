import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { HttpClientModule } from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { AppComponent } from "./app.component"
import { HeaderComponent } from "./components/header/header.component"
import { MainContentComponent } from "./components/main-content/main-content.component"
import { ExperienceComponent } from "./components/experience/experience.component"
import { SkillsComponent } from "./components/skills/skills.component"
import { LanguageHobbiesComponent } from "./components/language-hobbies/language-hobbies.component"
import { SidebarComponent } from "./components/sidebar/sidebar.component"
import { ContactComponent } from "./components/contact/contact.component"
import { EducationComponent } from "./components/education/education.component"
import { ReferencesComponent } from "./components/references/references.component"
import { IconComponent } from "./shared/components/icon/icon.component"
import { SectionTitleComponent } from "./shared/components/section-title/section-title.component"
import { NavbarComponent } from "./components/navbar/navbar.component"
import { FooterComponent } from "./components/footer/footer.component"
import { HomePageComponent } from "./pages/home-page/home-page.component"
import { LoadingSpinnerComponent } from "./shared/components/loading-spinner/loading-spinner.component"
import { ErrorMessageComponent } from "./shared/components/error-message/error-message.component"
import { AppRoutingModule } from "./app-routing.module"
import {ProfileService} from './services/profile.service';
import {AuthService} from './services/auth.service';
import {LoadingService} from './services/loading.service';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    ExperienceComponent,
    SkillsComponent,
    LanguageHobbiesComponent,
    SidebarComponent,
    ContactComponent,
    EducationComponent,
    ReferencesComponent,
    IconComponent,
    SectionTitleComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    LoadingSpinnerComponent,
    ErrorMessageComponent,

  ],
  providers: [
    AuthService,
    ProfileService,
    LoadingService,
    ApiService
  ],
  bootstrap: [],
})
export class AppModule {}
