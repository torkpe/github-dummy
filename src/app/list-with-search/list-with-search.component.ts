import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-with-search',
  templateUrl: './list-with-search.component.html',
  styleUrls: ['./list-with-search.component.css']
})
export class ListWithSearchComponent implements OnInit {
  @Input() label: string;
  @Input() displayNewbutton: boolean;
  @Input() listItems: string[];

  constructor() { }

  ngOnInit() {
  }

}
