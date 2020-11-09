import { Component, OnInit, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'tech-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.less']
})
export class AutocompleteComponent implements OnInit, ControlValueAccessor{

  private onChangeFn: (obj: any) => void;

  @Input()
  label: string = '';

  @Input()
  options: any[] = [];

  selectedValue: any = null;
  inputValue: string = '';

  constructor() { }

  
  ngOnInit() {
  }

  registerOnChange(fn: any){
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any){

  }

  writeValue(obj: string): void {
    this.inputValue = obj;
  }

  onSelect(a:any ) {
	  
  }

}
