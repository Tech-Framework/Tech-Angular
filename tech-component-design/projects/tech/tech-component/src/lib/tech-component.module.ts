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
import { BsDatepickerModule, BsDropdownModule } from 'ngx-bootstrap';


import {MatInputModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';


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
    CheckboxComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),

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
