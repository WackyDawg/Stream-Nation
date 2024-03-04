import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { ChannelMetadataComponent } from '../../components/channel-metadata/channel-metadata.component';
import { MainComponent } from '../../components/main/main.component';
import { MobileNavComponent } from '../../components/mobile-nav/mobile-nav.component';
import { OverlayPlayerComponent } from '../../components/overlay-player/overlay-player.component';
import { VideoComponent } from '../../components/video/video.component';

@Component({
  selector: 'app-live-tv',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ChannelMetadataComponent, MainComponent, MobileNavComponent, OverlayPlayerComponent,VideoComponent],
  templateUrl: './live-tv.component.html',
  styleUrls: ['./live-tv.component.css', '../../../assets/css/themed.css', '../../../assets/css/unthemed.css'], // Add additional CSS files here
})

export class LiveTvComponent {

}
