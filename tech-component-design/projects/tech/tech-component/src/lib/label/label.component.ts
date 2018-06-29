import { Component, OnInit, Optional, Input, DoCheck } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'tech-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.less']
})
export class LabelComponent implements OnInit, DoCheck{

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

  constructor(@Optional() public ngControl: NgControl) {
  }

  ngOnInit() {
  }

  ngDoCheck(){

  }
}
