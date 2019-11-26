import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'design-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.less']
})
export class AutocompleteComponent implements OnInit {

  options = ['option1', 'option2', 'option3'];

  constructor() { }

  ngOnInit() {
  }

}
