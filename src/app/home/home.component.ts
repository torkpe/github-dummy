import { Component, OnInit } from '@angular/core';
import { ListRenderItem } from '../list-renderer/list-renderer.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  leftItems: ListRenderItem = {
    data: ['item 1', 'item 2', 'item 3'],
    component: {
      type: 'sideItem'
    }
  };

  mainItems: ListRenderItem = {
    data: [
      'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
      'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
      'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
      'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
      'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
      'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
      'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
    ],
    component: {
      type: 'mainItem'
    }
  };

  rightItems: ListRenderItem = {
    data: ['item 1', 'item 2', 'item 3'],
    component: {
      type: 'sideItem'
    }
  };

  allItems: ListRenderItem[] = [this.leftItems, this.mainItems, this.rightItems];

  constructor() { }

  ngOnInit() {
  }

}
