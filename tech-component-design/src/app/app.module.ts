import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {TechComponentModule} from '@tech/tech-component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepickerComponent } from './showcase/datepicker/datepicker.component';
import { TextInputComponent } from './showcase/text-input/text-input.component';
import { NumberInputComponent } from './showcase/number-input/number-input.component';
import { TextInputExample1Component } from './showcase/text-input/reactive-form/example1/example1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerExample1Component } from './showcase/datepicker/reactive-form/example1/example1.component';

@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent,
    TextInputComponent,
    NumberInputComponent,
    TextInputExample1Component,
    DatepickerExample1Component
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    AppRoutingModule,

    TechComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
