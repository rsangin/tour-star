import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public checkForEnter(event) {
    if (event.key === 'Enter') {
      const input = document.querySelector('.search-input') as HTMLInputElement;
      const value = input.value;
      const request = {
        city: value
      };

      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          console.log(this.response);
        }
      };
      xhttp.open('POST', 'https://localhost:44386/api/tour/search');
      xhttp.setRequestHeader('Content-type', 'application/json');
      xhttp.responseType = 'json';
      xhttp.send(JSON.stringify(request));
    }
  }

}
