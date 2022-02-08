import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesMainComponent } from './bikes-main/bikes-main.component';
import { BikesDetailsComponent } from './bikes-details/bikes-details.component';

const routes: Routes = [
  { path: 'bikes', component: BikesMainComponent },
  { path: '', redirectTo: 'bikes', pathMatch: 'full' },
  { path: 'details/:id', component: BikesDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
