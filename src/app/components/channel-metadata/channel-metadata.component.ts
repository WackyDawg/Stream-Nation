import { Component } from '@angular/core';
import { OverlayPlayerComponent } from '../overlay-player/overlay-player.component';

@Component({
  selector: 'app-channel-metadata',
  standalone: true,
  imports: [OverlayPlayerComponent],
  templateUrl: './channel-metadata.component.html',
  styleUrls: ['./channel-metadata.component.css', '../../../assets/css/themed.css', '../../../assets/css/unthemed.css']
})
export class ChannelMetadataComponent {

}
