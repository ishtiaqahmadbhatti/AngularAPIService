import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { DummyapidataComponent } from './DummyAPI/dummyapidata/dummyapidata.component';

@NgModule({
  declarations: [
    AppComponent,
    DummyapidataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
