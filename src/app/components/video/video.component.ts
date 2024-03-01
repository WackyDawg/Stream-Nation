import { RouterOutlet } from '@angular/router';
import { Component, ViewChild, ElementRef } from '@angular/core';
// import { VideoContainerComponent } from '../video-container/video-container.component';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {

}
