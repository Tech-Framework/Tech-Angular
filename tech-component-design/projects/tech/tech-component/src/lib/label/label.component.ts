import { Component, OnInit, Optional, Input, DoCheck } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'tech-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.less']
})
export class LabelComponent implements OnInit, DoCheck{

  @Input() 
  label: string = '';

  constructor(@Optional() public ngControl: NgControl) {
  }

  ngOnInit() {
  }

  ngDoCheck(){
    if(this.ngControl.control.validator)
  }
}
