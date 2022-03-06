import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesMainComponent } from './bikes-main/bikes-main.component';
import { BikesDetailsComponent } from './bikes-details/bikes-details.component';
import { BikesOrderComponent } from './bikes-order/bikes-order.component';
import { BikesContactComponent } from './bikes-contact/bikes-contact.component';
import { BikesOrderSubmitComponent } from './bikes-order-submit/bikes-order-submit.component';

const routes: Routes = [
  { path: 'bikes', component: BikesMainComponent },
  { path: '', redirectTo: 'bikes', pathMatch: 'full' },
  { path: 'details/:id', component: BikesDetailsComponent },
  { path: 'order', component: BikesOrderComponent },
  { path: 'contact', component: BikesContactComponent },
  { path: 'bikes-order-submit', component: BikesOrderSubmitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
