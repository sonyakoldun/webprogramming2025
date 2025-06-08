import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule, Routes } from "@angular/router"
import { ReactiveFormsModule } from "@angular/forms"
import { LoginComponent } from "./components/login/login.component"
import { RegisterComponent } from "./components/register/register.component"
import { SharedModule } from "../../shared/shared.module"
import {provideHttpClient} from '@angular/common/http';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule, // Add SharedModule here
    RouterModule.forChild(routes),
    LoginComponent, RegisterComponent
  ],
  providers:[
    provideHttpClient()
  ]
})
export class AuthModule {}
