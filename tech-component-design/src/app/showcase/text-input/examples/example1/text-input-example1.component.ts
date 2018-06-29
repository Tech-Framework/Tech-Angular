import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'design-text-input-reactive-form-example1',
  templateUrl: './text-input-example1.component.html',
  styleUrls: ['./text-input-example1.component.less']
})
export class TextInputExample1Component implements OnInit {

  simpleForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.simpleForm = this.fb.group({
      simpleField1: new FormControl('', [Validators.required]),
      simpleField2: new FormControl(''),
      simpleField3: new FormControl('')
    });
  }

}
