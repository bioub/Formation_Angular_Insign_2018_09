import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { ButtonCounterComponent } from './button-counter/button-counter.component';
import { HelloFirstNameComponent } from './hello-first-name/hello-first-name.component';
import { ColorDropdownComponent } from './color-dropdown/color-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    ButtonCounterComponent,
    HelloFirstNameComponent,
    ColorDropdownComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
