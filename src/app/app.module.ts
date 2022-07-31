import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DanceHallComponent } from './components/dance-hall/dance-hall.component';

@NgModule({
  declarations: [
    AppComponent,
    DanceHallComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
