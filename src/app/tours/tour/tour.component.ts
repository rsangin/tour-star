import { Component, OnInit, Input } from '@angular/core';
import { Tour } from '../models/tour';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {
  @Input()
  public tour: Tour;

  constructor() { }

  ngOnInit(): void {
  }

}
