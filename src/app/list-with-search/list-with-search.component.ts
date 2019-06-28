import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ListItemComponent } from '../list-renderer/list-renderer.component';

@Component({
  selector: 'app-list-with-search',
  templateUrl: './list-with-search.component.html',
  styleUrls: ['./list-with-search.component.css']
})
export class ListWithSearchComponent implements OnInit , ListItemComponent, AfterViewInit{
  ngAfterViewInit(): void {
    console.log(this.data);
  }
  data: any;
  @Input() label: string;
  @Input() displayNewbutton: boolean;
  @Input() listItems: string[];

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
