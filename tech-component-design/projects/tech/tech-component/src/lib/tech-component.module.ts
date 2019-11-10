import { NgModule } from '@angular/core';
import { TechComponentComponent } from './tech-component.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DaterangepickerComponent } from './daterangepicker/daterangepicker.component';
import { CurrencyAmountComponent } from './currency-amount/currency-amount.component';
import { PagingSearchResultGridComponent } from './paging-search-result-grid/paging-search-result-grid.component';
import { TextInputComponent } from './text-input/text-input.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule, BsDropdownModule, AccordionModule } from 'ngx-bootstrap';


import {MatInputModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { LabelComponent } from './label/label.component';


@NgModule({
  declarations: [
    TechComponentComponent, 
    DatepickerComponent, 
    DaterangepickerComponent, 
    CurrencyAmountComponent, 
    PagingSearchResultGridComponent, 
    TextInputComponent, 
    NumberInputComponent, 
    AutocompleteComponent, 
    CheckboxComponent, 
    ErrorMessageComponent, LabelComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    
    MatInputModule,
    MatIconModule,
    MatButtonModule

  ],
  exports: [
    DatepickerComponent, 
    DaterangepickerComponent,
    TextInputComponent
  ]
})
export class TechComponentModule { }
