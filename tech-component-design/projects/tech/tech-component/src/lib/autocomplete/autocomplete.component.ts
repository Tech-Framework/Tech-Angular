import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tech-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.less']
})
export class AutocompleteComponent implements OnInit {

  private onChangeFn: (obj: any) => void;

  @Input()
  label: string = '';

  @Input()
  options: any[] = [];

  selectedValue: any = null;
  inputValue: string = '';

  constructor() { }

  ngOnInit() {
  }

  registerOnChange(fn: any){
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any){

  }
  
  onSelect(a:any ) {
	  
  }

}
