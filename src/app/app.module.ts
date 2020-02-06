import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TafelComponent } from './tafel/tafel.component';
import { MuurtafelComponent } from './muurtafel/muurtafel.component';

@NgModule({
  declarations: [
    AppComponent,
    TafelComponent,
    MuurtafelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
