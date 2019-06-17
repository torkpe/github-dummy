import { Component, OnInit, Input } from '@angular/core';
export interface ListRenderItem{
  data: any;
  component: object;
}
@Component({
  selector: 'app-list-renderer',
  templateUrl: './list-renderer.component.html',
  styleUrls: ['./list-renderer.component.css']
})
export class ListRendererComponent implements OnInit {
  @Input() items: ListRenderItem[];
  constructor() { }

  ngOnInit() {
  }

}
