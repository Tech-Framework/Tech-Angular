import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { TimezoneService } from '@tech/tech-component/timezone/timezone.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'design-datepicker-example1',
  templateUrl: './datepicker-example1.component.html',
  styleUrls: ['./datepicker-example1.component.less']
})
export class DatepickerExample1Component implements OnInit {

  loadingData: string = '';
  simpleForm: FormGroup;

  constructor(private fb: FormBuilder, private timezoneService: TimezoneService) {
    this.timezoneService.setSystemTimezone({
      timezoneId: 'Europe/Paris'
    });

    this.simpleForm = fb.group({
      simpleField1: new FormControl(''),
      simpleField2: new FormControl(''),
      simpleField3: new FormControl('')
    });
  }

  ngOnInit() {

  }

  loadData(){
    const jsonData = JSON.parse(this.loadingData);
    jsonData.simpleField1 = new Date(jsonData.simpleField1);
    jsonData.simpleField2 = new Date(jsonData.simpleField2);
    jsonData.simpleField3 = new Date(jsonData.simpleField3);
    this.simpleForm.patchValue(jsonData);
  }

}
