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

  @Input()
  required: boolean = false;

  @Input()
  label: string;

  private validationFn: () => void;
  private onChangeFn: (obj: any) => void;

  constructor() {
  }

  ngOnInit() {
    console.log('init');
  }

  writeValue(obj: any){
    console.log('write value');
  }
  
  registerOnChange(fn: any){
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any){

  }

  onChange(event: Event){
    console.log('onchange');
    const target = event.target as HTMLInputElement;
    if  (target){
      this.onChangeFn(target.value);
    }
  }



}
