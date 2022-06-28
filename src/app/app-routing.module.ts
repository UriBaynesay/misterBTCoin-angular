import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ContactDetailsPageComponent } from "./pages/contact-details-page/contact-details-page.component"
import { ContactEditPageComponent } from "./pages/contact-edit-page/contact-edit-page.component"
import { ContactsPageComponent } from "./pages/contacts-page/contacts-page.component"
import { HomepageComponent } from "./pages/homepage/homepage.component"
import { ContactResolverResolver } from "./service/contact-resolver.resolver"

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
    path: "contact/edit/:contactId",
    component: ContactEditPageComponent,
    resolve: { contact: ContactResolverResolver },
  },
  {
    path: "contact/edit",
    component: ContactEditPageComponent,
  },
  {
    path: "contact/:contactId",
    component: ContactDetailsPageComponent,
    resolve: { contact: ContactResolverResolver },
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
