import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikesService } from './bikes.service';
import { BikesComponent } from './bikes/bikes.component';
import { BikesMainComponent } from './bikes-main/bikes-main.component';
import { BikesDetailsComponent } from './bikes-details/bikes-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BikesComponent,
    BikesMainComponent,
    BikesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [BikesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
