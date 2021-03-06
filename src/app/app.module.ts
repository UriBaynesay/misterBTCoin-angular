import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppRoutingModule } from "./app-routing.module"
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from "./root-cmp/app.component"
import { HomepageComponent } from "./pages/homepage/homepage.component"
import { AppHeaderComponent } from "./cmps/app-header/app-header.component"
import { ContactsPageComponent } from "./pages/contacts-page/contacts-page.component"
import { ContactsFilterComponent } from "./cmps/contacts-filter/contacts-filter.component"
import { ContactsListComponent } from "./cmps/contacts-list/contacts-list.component"
import { ContactsPreviewComponent } from "./cmps/contacts-preview/contacts-preview.component"
import { ContactDetailsPageComponent } from "./pages/contact-details-page/contact-details-page.component";
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component'
import { FormsModule } from "@angular/forms";
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component'

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AppHeaderComponent,
    ContactsPageComponent,
    ContactsFilterComponent,
    ContactsListComponent,
    ContactsPreviewComponent,
    ContactDetailsPageComponent,
    ContactEditPageComponent,
    LoginPageComponent,
    SignupPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
