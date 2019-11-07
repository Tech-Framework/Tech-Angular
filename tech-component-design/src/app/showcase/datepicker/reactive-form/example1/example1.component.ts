import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'design-datepicker-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.less']
})
export class DatepickerExample1Component implements OnInit {

  simpleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.simpleForm = fb.group({
      simpleField1: new FormControl(''),
      simpleField2: new FormControl(''),
      simpleField3: new FormControl('')
    });
  }

  ngOnInit() {

  }

}
