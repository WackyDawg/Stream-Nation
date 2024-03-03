import { RouterOutlet } from '@angular/router';
import { Component, ViewChild, ElementRef } from '@angular/core';
// import { VideoContainerComponent } from '../video-container/video-container.component';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css', '../../../assets/css/themed.css', '../../../assets/css/unthemed.css']
})
export class VideoComponent {

}
