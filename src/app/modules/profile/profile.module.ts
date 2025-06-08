import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule, Routes } from "@angular/router"
import { ReactiveFormsModule } from "@angular/forms"
import { ProfilePageComponent } from "./pages/profile-page/profile-page.component"
import { SharedModule } from "../../shared/shared.module"
import {provideHttpClient} from '@angular/common/http';

const routes: Routes = [{ path: "", component: ProfilePageComponent }]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule, // Add SharedModule here
    RouterModule.forChild(routes),
  ],
  providers:[
  provideHttpClient()
]
})
export class ProfileModule {}
