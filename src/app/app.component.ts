import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LiveTvComponent } from './pages/live-tv/live-tv.component';
import { SearchComponent } from './pages/search/search.component';
// import { VideoContainerComponent } from './components/video-container/video-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, LiveTvComponent,SearchComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../assets/css/themed.css', '../assets/css/unthemed.css']
})
export class AppComponent {
  title = 'my-app';
  
 
}
