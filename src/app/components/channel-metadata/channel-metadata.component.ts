import { Component } from '@angular/core';
import { OverlayPlayerComponent } from '../overlay-player/overlay-player.component';

@Component({
  selector: 'app-channel-metadata',
  standalone: true,
  imports: [OverlayPlayerComponent],
  templateUrl: './channel-metadata.component.html',
  styleUrl: './channel-metadata.component.css'
})
export class ChannelMetadataComponent {

}
