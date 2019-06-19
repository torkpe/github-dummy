import { Component, OnInit, ContentChild, TemplateRef, Input } from '@angular/core';
import { SideItemsDirective } from '../directives/side-items.directive';
import { MainItemsDirective } from '../directives/main-items.directive';

interface ListItemComponent {
  type: 'sideItem' | 'mainItem';
}
export interface ListRenderItem {
  data: any[];
  component: ListItemComponent;
}
@Component({
  selector: 'app-list-renderer',
  templateUrl: './list-renderer.component.html',
  styleUrls: ['./list-renderer.component.css']
})
export class ListRendererComponent implements OnInit {
  @Input() allContents: ListRenderItem[];
  @Input() mode: ListItemComponent;
  @ContentChild(SideItemsDirective, {read: TemplateRef}) sideItemsTemplate;
  @ContentChild(MainItemsDirective, {read: TemplateRef}) mainItemsTemplate;
  constructor() { }

  ngOnInit() {
    console.log(this.allContents);
  }

}
