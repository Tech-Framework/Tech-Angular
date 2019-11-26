import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tech-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.less']
})
export class AutocompleteComponent implements OnInit {

  @Input()
  label: string = '';

  @Input()
  options: any[] = [];

  selectedValue: any = null;
  inputValue: string = '';

  constructor() { }

  ngOnInit() {
  }

}
