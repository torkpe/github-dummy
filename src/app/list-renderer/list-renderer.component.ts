import { Component, OnInit, ContentChild, TemplateRef, Input, ComponentFactoryResolver, AfterViewInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { SideItemsDirective } from '../directives/side-items.directive';
import { MainItemsDirective } from '../directives/main-items.directive';

export interface ListItemComponent {
  data: any;
}
export interface ListRenderItem {
  data: any;
  component: Type<ListItemComponent>;
}
@Component({
  selector: 'app-list-renderer',
  templateUrl: './list-renderer.component.html',
  styleUrls: ['./list-renderer.component.css']
})
export class ListRendererComponent implements OnInit, AfterViewInit {
  @ViewChild('target', {read: ViewContainerRef}) componentContainer: ViewContainerRef;
  ngAfterViewInit(): void {
    console.log(this.allContents.component);
    const factory = this.componentFactory.resolveComponentFactory(this.allContents.component);
    this.component = this.componentContainer.createComponent(factory);
    this.component.instance.data = this.allContents.data;
  }
  @Input() allContents: ListRenderItem;
  public component;
  // @Input() mode: ListItemComponent;
  // @ContentChild(SideItemsDirective, {read: TemplateRef}) sideItemsTemplate;
  // @ContentChild(MainItemsDirective, {read: TemplateRef}) mainItemsTemplate;
  constructor(private componentFactory: ComponentFactoryResolver) {}

  ngOnInit() {
    console.log(this.allContents);
  }

}
