import { Component,ViewChild, ElementRef,AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  @ViewChild('slider') slider!: ElementRef; // Note the '!' to indicate that it will be initialized later
  slideWidth!: number; // Note the '!' to indicate that it will be initialized later
  scrollPosition: number = 0;

  ngAfterViewInit() {
    this.slideWidth = this.slider.nativeElement.offsetWidth;
  }

  prev() {
    if (this.scrollPosition > 0) {
      this.scrollPosition -= this.slideWidth;
      this.slider.nativeElement.scrollTo({
        left: this.scrollPosition,
        behavior: 'smooth'
      });
    }
  }

  next() {
    if (this.scrollPosition < this.slider.nativeElement.scrollWidth - this.slider.nativeElement.clientWidth) {
      this.scrollPosition += this.slideWidth;
      this.slider.nativeElement.scrollTo({
        left: this.scrollPosition,
        behavior: 'smooth'
      });
    }
  }
}
