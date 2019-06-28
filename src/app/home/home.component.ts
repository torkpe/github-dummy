import { Component, OnInit } from '@angular/core';
import { ListRenderItem, ListItemComponent } from '../list-renderer/list-renderer.component';
import { ListViewComponent } from '../list-view/list-view.component';
import { ListWithSearchComponent } from '../list-with-search/list-with-search.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  leftItems: ListRenderItem = 
    {
      data: {
        items:['item 1', 'item 2', 'item 3']
      },
      component: ListViewComponent
    };
  // leftItems = {
  //   data: [
  //         'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
  //         'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
  //         'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
  //         'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
  //         'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
  //         'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
  //         'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
  //   ],
  // }
  // mainItems: ListRenderItem = {
  //   data: [
  //     'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
  //     'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
  //     'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
  //     'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
  //     'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
  //     'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
  //     'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
  //   ],
  //   component: List
  // };

  rightItems: ListRenderItem = {
    data: { 
      items:['item 1', 'item 2', 'item 3']
    },
    component: ListWithSearchComponent
  };

  // allItems: ListRenderItem[] = [this.leftItems, this.rightItems];

  constructor() { }

  ngOnInit() {
  }

}
