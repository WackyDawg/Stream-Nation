import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LiveTvComponent } from './components/live-tv/live-tv.component';
import { SearchComponent } from './components/search/search.component';
// import { VideoContainerComponent } from './components/video-container/video-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, LiveTvComponent,SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  
 
}
