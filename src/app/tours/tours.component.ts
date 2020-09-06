import { Component, OnInit, Input } from '@angular/core';
import { Tour } from './models/tour';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {
  @Input()
  public tours: Tour[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
