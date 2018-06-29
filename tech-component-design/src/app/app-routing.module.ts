import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatepickerComponent } from './showcase/datepicker/datepicker.component';
import { TextInputComponent } from './showcase/text-input/text-input.component';
import { AutocompleteComponent } from './showcase/autocomplete/autocomplete.component';


const routes: Routes = [
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'text-input', component: TextInputComponent },
  { path: 'autocomplete', component: AutocompleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
