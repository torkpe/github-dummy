import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListWithSearchComponent } from './list-with-search/list-with-search.component';
import { RandomPageComponent } from './random-page/random-page.component';
import { ListRendererComponent } from './list-renderer/list-renderer.component';

import { MainItemsDirective } from './directives/main-items.directive';
import { SideItemsDirective } from './directives/side-items.directive';
import { ListViewComponent } from './list-view/list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListWithSearchComponent,
    RandomPageComponent,
    ListRendererComponent,
    MainItemsDirective,
    SideItemsDirective,
    ListViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ListViewComponent,
    ListWithSearchComponent
  ]
})
export class AppModule { }
