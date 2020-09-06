import { ToursComponent } from './tours.component';
import { TourComponent } from './tour/tour.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ToursComponent,
    TourComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToursComponent
  ],
  providers: [],
})
export class ToursModule { }
