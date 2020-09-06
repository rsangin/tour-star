import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ToursModule } from '../tours/tours.module';
import { SliderShowComponent } from './slider-show/slider-show.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    HomeComponent,
    SliderShowComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    ToursModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [],
})
export class HomeModule { }
