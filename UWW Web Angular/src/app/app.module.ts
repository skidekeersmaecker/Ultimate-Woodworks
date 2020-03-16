import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TafelComponent } from './tafel/tafel.component';
import { MuurtafelComponent } from './muurtafel/muurtafel.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    TafelComponent,
    MuurtafelComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }