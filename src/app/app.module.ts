import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DanceHallComponent } from './components/dance-hall/dance-hall.component';
import { UahPipe } from './pipes/uahPipe';
import { DanceSchoolComponent } from './components/dance-school/dance-school.component';
import { BacklightColorDirective } from './components/directives/backlight-color.directive';
import { ModalDirective } from './components/directives/modal.directive';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HallsPageComponent } from './pages/halls-page/halls-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AppRoutingModule } from './app-router/app-routing.module';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './interceptors/interceptorProviders';

@NgModule({
  declarations: [
    AppComponent,
    DanceHallComponent,
    UahPipe,
    DanceSchoolComponent,
    BacklightColorDirective,
    ModalDirective,
    AboutPageComponent,
    HallsPageComponent,
    NewsPageComponent,
    ContactsPageComponent,
    LoginPageComponent,
    NavigationComponent,
    FooterComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    ReactiveFormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
