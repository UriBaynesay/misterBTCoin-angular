import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ContactResolverService } from "./contact-resolver.service"
import { ContactDetailsPageComponent } from "./pages/contact-details-page/contact-details-page.component"
import { ContactsPageComponent } from "./pages/contacts-page/contacts-page.component"
import { HomepageComponent } from "./pages/homepage/homepage.component"

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent,
  },
  {
    path: "contacts",
    component: ContactsPageComponent,
  },
  {
    path: "contact/:contactId",
    component: ContactDetailsPageComponent,
    resolve:{contact:ContactResolverService}
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
