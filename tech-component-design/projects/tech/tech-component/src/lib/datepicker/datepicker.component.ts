import { Component, OnInit, Input, forwardRef, Optional, Self, ViewChild, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NgControl, Validator, NG_VALIDATORS, ValidationErrors, AbstractControl, FormControl, Validators } from '@angular/forms';
import { BsDatepickerDirective } from 'ngx-bootstrap';

@Component({
  selector: 'tech-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true,
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerComponent implements OnInit, ControlValueAccessor{
  
 
  private datepickerValue: Date;

  @Input()
  label: string;

  @Input()
  keyboardInput = false;

  @Input()
  displayFormate = "YYYY-MM-DD"

  @Input()
  dateStringInputFormat = null;

  @Input()
  isBrowserTimezone = true;

  _timeZone = 0;
  @Input()
  set timeZone(timeZone: number){
    this._timeZone = timeZone;
  }

  _maxDate: Date;
  @Input()
  set maxDate(date: Date) {
    this._maxDate = date;
  }

  _minDate: Date;
  @Input()
  set minDate(date: Date){
    this._minDate = date;
  }

  constructor() {
    
  }

  ngOnInit() {
  }

  writeValue(obj: Date ): void {
    if(obj){
      this.datepickerValue = obj;
    }else {
      this.datepickerValue = undefined;
    }
  }

  onBsValueChange(obj: Date){
    this.propagateChange(obj);
  }

  propagateChange = (ouput: any) => {};

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {

  }

  onKeydown(event: KeyboardEvent){
    if (!this.keyboardInput){
      event.preventDefault();
    }
  }

  onClearValue(){
    this.datepickerValue = null;
  }

}
