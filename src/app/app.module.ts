import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {InputComponentComponent} from './input-component/input-component.component';
import {ResultsComponentComponent} from './results-component/results-component.component';
import {FormsModule} from '@angular/forms';
import {NumbersService} from './numbers.service';

@NgModule({
  declarations: [
    AppComponent,
    InputComponentComponent,
    ResultsComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [NumbersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
