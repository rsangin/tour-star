import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ToursModule } from '../tours/tours.module';
import { SliderShowComponent } from './slider-show/slider-show.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TourService } from './services/tour.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    SliderShowComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    ToursModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    TourService
  ],
})
export class HomeModule { }
