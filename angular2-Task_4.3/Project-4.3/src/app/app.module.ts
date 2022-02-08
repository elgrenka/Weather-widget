import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikesService } from './bikes.service';
import { BikesComponent } from './bikes/bikes.component';
import { BikesMainComponent } from './bikes-main/bikes-main.component';

@NgModule({
  declarations: [
    AppComponent,
    BikesComponent,
    BikesMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BikesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
