import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ToysComponent } from './toys/toys.component';

import { ColorPipe } from './toys/color.pipe';
import { HighLightPipe} from './toys/highlight.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ToysComponent,
    ColorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ColorPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
