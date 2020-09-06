import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TourService } from './services/tour.service';
import { Tour } from '../tours/models/tour';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public tours: Tour[];

  constructor(private service: TourService) { }

  async ngOnInit() {
    this.searchTour('تهران');
  }

  public async searchTour(city: string) {
    this.tours = await this.service.getTours(city);
  }
}
