import { Component, OnInit, Input, forwardRef, Optional, Self, ViewChild, HostListener, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NgControl, Validator, NG_VALIDATORS, ValidationErrors, AbstractControl, FormControl, Validators } from '@angular/forms';
import { TimezoneService } from '../timezone/timezone.service';
import { SystemDateInput } from '../timezone/system-time';
import { BsDaterangepickerDirective } from 'ngx-bootstrap';

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
  
  @ViewChild('datepicker', {static: false}) picker: BsDaterangepickerDirective;

  datepickerValue: Date;

  @Input()
  label: string;

  @Input()
  keyboardInput = false;

  @Input()
  displayFormate = "YYYY-MM-DD"

  @Input()
  inOutStringFormat = null;

  @Input()
  isBrowserTimezone = true;

  @Input()
  useUtc = false;

  @Input()
  useSystemTimezone = false;

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

  constructor(private _changeDetectorRef: ChangeDetectorRef, 
    private timezoneService: TimezoneService) {
    
  }

  ngOnInit() {
  }

  writeValue(obj: Date ): void {
    if(obj){
      if (this.isBrowserTimezone){
        this.datepickerValue = obj;
      } else if (this.useUtc){
        if (obj instanceof SystemDateInput){
          const tmpDate = this.timezoneService.getJsDateBySystemDateInput(obj);
          this.propagateChange(tmpDate);
          obj = tmpDate;
        } 
        this.datepickerValue = this.timezoneService.getLocalUtcDate(obj);
      } else {
        this.datepickerValue = this.timezoneService.getLocalSystemDate(obj);
      }
    } else {
      this.datepickerValue = undefined;
    }
    this._changeDetectorRef.detectChanges();
  }

  onBsValueChange(obj: Date){
    obj.setHours(0,0,0,0);
    this.datepickerValue = obj;
    if (this.isBrowserTimezone){
      this.propagateChange(obj);
    } else if (this.useUtc) {
      this.propagateChange(this.timezoneService.getJsDateFromLocalUtcDate(obj));
    } else {
      this.propagateChange(this.timezoneService.getJsDateFromLocalSytemDate(obj));
    }
    this._changeDetectorRef.detectChanges();
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
    this.datepickerValue = undefined;
  }

}
