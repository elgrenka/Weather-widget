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

import { BikesOrderComponent } from './bikes-order/bikes-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderEditorComponent } from './order-editor/order-editor.component';
import { BikesContactComponent } from './bikes-contact/bikes-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    BikesComponent,
    BikesMainComponent,
    BikesDetailsComponent,
    BikesOrderComponent,
    OrderEditorComponent,
    BikesContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BikesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
