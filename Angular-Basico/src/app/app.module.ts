import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicoComponent } from './components/basico/basico.component';
import { DirectivasComponent } from './components/directivas/directivas.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicoComponent,
    DirectivasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
