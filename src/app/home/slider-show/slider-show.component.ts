import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-show',
  templateUrl: './slider-show.component.html',
  styleUrls: ['./slider-show.component.scss']
})
export class SliderShowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.changeImage(), 10000);
  }

  private changeImage() {
    const sliderPhoto = document.getElementsByClassName('slider-photo')[0] as HTMLElement;
    const currentImage = sliderPhoto.style.backgroundImage;
    let index = +currentImage.substr(currentImage.indexOf('bg') + 2, 1);

    index = index % 5;
    index++;

    sliderPhoto.style.backgroundImage = 'url(../../../assets/images/bg' + index + '.jpg)';
  }

}
