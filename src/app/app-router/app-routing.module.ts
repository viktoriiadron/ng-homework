import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DanceSchoolComponent } from '../components/dance-school/dance-school.component';
import { RegistrationComponent } from '../components/registration/registration.component';
import { AboutPageComponent } from '../pages/about-page/about-page.component';
import { ContactsPageComponent } from '../pages/contacts-page/contacts-page.component';
import { HallsPageComponent } from '../pages/halls-page/halls-page.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { NewsPageComponent } from '../pages/news-page/news-page.component';
import { RegLinkGuard } from '../services/reg-link.guard'

const routes: Routes = [
  { path: '', component: AboutPageComponent },
  { path: 'halls', component: HallsPageComponent },
  { path: 'news', component: NewsPageComponent },
  { path: 'contacts', component: ContactsPageComponent },
  {
    path: 'login', component: LoginPageComponent, children: [ {
    path: 'registration', component: RegistrationComponent, canActivate: [RegLinkGuard]
    }]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
