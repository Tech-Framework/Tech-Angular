import { Component, OnInit, Optional, DoCheck } from '@angular/core';
import { NgControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';

@Component({
  selector: 'tech-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.less']
})
export class ErrorMessageComponent implements OnInit, DoCheck{

  private errorMessage: string = '';
  
  constructor(@Optional() public ngControl: NgControl, 
    private translateSevice: TranslateService) {
  }

  ngOnInit() {
  }

  ngDoCheck(){
    if (this.ngControl && this.ngControl.errors){
      const keyArr = _.keys(this.ngControl.errors);
      if (keyArr && keyArr.length > 0 ){
        this.errorMessage = this.translateSevice.instant(keyArr[0]);
      }
    }else {
      this.errorMessage = '';
    }
  }


}
