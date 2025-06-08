import { RouterModule, Routes } from "@angular/router"
import { HomePageComponent } from "./pages/home-page/home-page.component"
import { AuthGuard } from "./guards/auth.guard"

export const routes: Routes = [
  { path: "", component: HomePageComponent },
  {
    path: "auth",
    loadChildren: () => import("./modules/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "forms",
    loadChildren: () => import("./modules/forms/forms.module").then((m) => m.FormsModule),
    canActivate: [AuthGuard],
  },
  {
    path: "profile",
    loadChildren: () => import("./modules/profile/profile.module").then((m) => m.ProfileModule),
    canActivate: [AuthGuard],
  },
  { path: "**", redirectTo: "" },
]

export class AppRoutingModule {}
