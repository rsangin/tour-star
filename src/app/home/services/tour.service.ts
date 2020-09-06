import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tour } from 'src/app/tours/models/tour';

@Injectable()
export class TourService {
  constructor(private http: HttpClient) {
  }

  public async getTours(searchkey: string): Promise<Tour[]> {
    return new Promise<Tour[]>((resolve) => {
      this.http.post('https://localhost:44386/api/tour/search', { city: searchkey }).subscribe((result: Tour[]) => {
        resolve(result);
      });
    });
  }
}
