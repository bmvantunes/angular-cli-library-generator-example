import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NglgDemoAppModule } from './nglg';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NglgDemoAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
