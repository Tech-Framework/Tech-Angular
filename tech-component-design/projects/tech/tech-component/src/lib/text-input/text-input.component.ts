import { Component, OnInit, Input, Self, Optional, forwardRef, Inject, Host, OnDestroy } from '@angular/core';
import { NgControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators, Validator, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'tech-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.less'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=> TextInputComponent),
    multi: true
  }]
})
export class TextInputComponent implements OnInit, ControlValueAccessor{

  _label: string = '';
  
  @Input()
  set label(val: string){
    this._label = val;
  }

  get label(): string{
    if(this.mandatoryLabel){
      return this._label + '*';
    } else {
      return this._label
    }
  }

  @Input()
  mandatoryLabel: false;

  private validationFn: () => void;
  private onChangeFn: (obj: any) => void;

  constructor() {
  }

  ngOnInit() {
  }

  writeValue(obj: any){
  }
  
  registerOnChange(fn: any){
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any){

  }

  onChange(event: Event){
    const target = event.target as HTMLInputElement;
    if  (target){
      if (this.onChangeFn){
        this.onChangeFn(target.value);
      }
    }
  }



}
