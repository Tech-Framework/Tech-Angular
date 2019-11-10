import { Component, OnInit, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'tech-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.less']
})
export class ErrorMessageComponent implements OnInit {

  constructor(@Optional() public ngControl: NgControl) {

  }

  ngOnInit() {
    if (this.ngControl){
      console.log(this.ngControl.errors);
    }
  }

}
