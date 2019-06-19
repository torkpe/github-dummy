import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRendererComponent } from './list-renderer.component';
import { SideItemsDirective } from '../directives/side-items.directive';
import { MainItemsDirective } from '../directives/main-items.directive';

fdescribe('ListRendererComponent', () => {
  let component: ListRendererComponent;
  let fixture: ComponentFixture<ListRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListRendererComponent,
        SideItemsDirective,
        MainItemsDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display mainItem', () => {
    component.allContents = [
      {
        data: [
          'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
          'hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj',
        ],
        component: {
          type: 'mainItem'
        }
      }
    ];

    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.textContent).toContain('hjdf dfhjfdjhfd dfhfdjhdf dfhjf dfjfd dfjhdfhj dfhdfj');
  });
});
