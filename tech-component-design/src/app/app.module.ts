import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {TechComponentModule} from '@tech/tech-component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepickerComponent } from './showcase/datepicker/datepicker.component';
import { TextInputComponent } from './showcase/text-input/text-input.component';
import { NumberInputComponent } from './showcase/number-input/number-input.component';
import { TextInputExample1Component } from './showcase/text-input/examples/example1/text-input-example1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerExample1Component } from './showcase/datepicker/examples/example1/datepicker-example1.component';
import { AccordionModule } from 'ngx-bootstrap';
import { AppConfigService } from './config/app-config.service';
import { TimezoneService } from '@tech/tech-component/timezone/luxon.timezone.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AutocompleteComponent } from './showcase/autocomplete/autocomplete.component';
import { AutocompleteExample1Component } from './showcase/autocomplete/examples/example1/autocomplete-example1/autocomplete-example1.component';
@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent,
    TextInputComponent,
    NumberInputComponent,
    TextInputExample1Component,
    DatepickerExample1Component,
    AutocompleteComponent,
    AutocompleteExample1Component
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    AppRoutingModule,
    HttpClientModule,

    TechComponentModule,
    
    AccordionModule.forRoot(),

  ],
  providers: [
    { 
      provide: APP_INITIALIZER, 
      useFactory: (configService: AppConfigService) => () => configService.initTimezone(), 
      deps: [AppConfigService, TimezoneService],
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
