import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ContactsPageComponent } from "./pages/contacts-page/contacts-page.component"
import { HomepageComponent } from "./pages/homepage/homepage.component"

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent,
  },
  {
    path:"contacts",
    component:ContactsPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
