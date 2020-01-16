import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { FormsModule } from '@angular/forms';
import { TextDetailComponent } from './text-detail/text-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    TextDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
