import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicCardComponent } from './basic-card/basic-card.component';
import { BasicFormsComponent } from './basic-forms/basic-forms.component';
import { BasicSectionComponent } from './basic-section/basic-section.component';
import { BasicHomeComponent } from './basic-home/basic-home.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicCardComponent,
    BasicSectionComponent,
    BasicFormsComponent,
    BasicHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
