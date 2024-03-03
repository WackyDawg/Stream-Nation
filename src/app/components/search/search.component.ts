import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { VideoComponent } from '../video/video.component';
import { ChannelMetadataComponent } from '../channel-metadata/channel-metadata.component';
import { OverlayPlayerComponent } from '../overlay-player/overlay-player.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { SearchMainComponent } from '../pages/search-main/search-main.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    HeaderComponent,
    VideoComponent,
    ChannelMetadataComponent,
    OverlayPlayerComponent,
    SidebarComponent,
    MobileNavComponent,
    LoginDialogComponent,
    SearchMainComponent,
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css', '../../../assets/css/themed.css', '../../../assets/css/unthemed.css'],
})
export class SearchComponent {}
