import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ListRenderItem, ListItemComponent } from '../list-renderer/list-renderer.component';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit , ListItemComponent, AfterViewInit{
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.content = this.data;
    });
  }
  data: any;
  content: { items: string[]}

  constructor() { }

  ngOnInit() {

  }


}
