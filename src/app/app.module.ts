import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { MatIconModule, MatGridListModule, MatButtonModule, MatCardModule, MatToolbarModule, MatListModule, MatChipsModule, MatMenuModule, MatTabsModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ToysComponent } from './toys/toys.component';

import { ColorPipe } from './toys/color.pipe';
import { ToysService } from './toys.service';


@NgModule({
  declarations: [
    AppComponent,
    ToysComponent,
    ColorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatChipsModule,
    MatMenuModule,
    MatTabsModule,
    MatGridListModule,
    FlexLayoutModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [ColorPipe, ToysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
