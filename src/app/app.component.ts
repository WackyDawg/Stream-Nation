import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { VideoComponent } from './components/video/video.component';
import { MainComponent } from './components/main/main.component';
import { MobileNavComponent } from './components/mobile-nav/mobile-nav.component';
import { ChannelMetadataComponent } from './components/channel-metadata/channel-metadata.component';
import { OverlayPlayerComponent } from './components/overlay-player/overlay-player.component';
import { LiveTvComponent } from './components/live-tv/live-tv.component';
// import { VideoContainerComponent } from './components/video-container/video-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,VideoComponent,MainComponent,MobileNavComponent,ChannelMetadataComponent,OverlayPlayerComponent,LiveTvComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  
 
}
