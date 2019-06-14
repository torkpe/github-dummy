import { Component, OnInit } from '@angular/core';
import { ListRenderItem } from '../list-renderer/list-renderer.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listItems: string[] = ['item 1', 'item 2', 'item 3'];
  mainSectionItems: string[] = [
    'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
    'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
    'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
    'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
    'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
    'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
    'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
  ];
  leftItems: ListRenderItem[];
  mainItems: ListRenderItem[];
  rightItems: ListRenderItem[];
  constructor() { }

  ngOnInit() {
  }

}
