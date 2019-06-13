import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListWithSearchComponent } from './list-with-search/list-with-search.component';
import { RandomPageComponent } from './random-page/random-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListWithSearchComponent,
    RandomPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
