import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'tech-daterangepicker',
  templateUrl: './daterangepicker.component.html',
  styleUrls: ['./daterangepicker.component.less']
})
export class DaterangepickerComponent implements OnInit {

  datepickerValue: Date;

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

  @Input()
  useUtc = false;

  @Input()
  useSystemTimzone = false;

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

  constructor(private _changeDetectorRef: ChangeDetectorRef) {
    
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
    this.datepickerValue = obj;
    this.propagateChange(obj);
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
