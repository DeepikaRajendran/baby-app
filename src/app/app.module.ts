import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { MatIconModule, MatGridListModule, MatButtonModule, MatCardModule, MatToolbarModule, MatListModule, MatChipsModule, MatMenuModule, MatTabsModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ToysComponent } from './toys/toys.component';

import { ColorPipe } from './toys/color.pipe';
import { ToysService } from './toys.service';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'prefix'},
  { path: 'home', component: DashboardComponent },
  { path:'toys/:id', component: ToysComponent },
  { path:'toys', component: ToysComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ToysComponent,
    ColorPipe,
    DashboardComponent
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
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ColorPipe, ToysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
