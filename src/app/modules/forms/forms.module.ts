import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule, Routes } from "@angular/router"
import { FormsModule as AngularFormsModule, ReactiveFormsModule } from "@angular/forms"
import { TemplateFormComponent } from "./components/template-form/template-form.component"
import { ReactiveFormComponent } from "./components/reactive-form/reactive-form.component"
import { FormsPageComponent } from "./pages/forms-page/forms-page.component"
import { SharedModule } from "../../shared/shared.module"
import {provideHttpClient} from '@angular/common/http';

const routes: Routes = [
  {
    path: "",
    component: FormsPageComponent,
    children: [
      { path: "template", component: TemplateFormComponent },
      { path: "reactive", component: ReactiveFormComponent },
      { path: "", redirectTo: "template", pathMatch: "full" },
    ],
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFormsModule,
    ReactiveFormsModule,
    SharedModule, // Add SharedModule here
    RouterModule.forChild(routes),
    TemplateFormComponent, ReactiveFormComponent, FormsPageComponent
  ],
  providers:[
    provideHttpClient()
  ]
})
export class FormsModule {}
