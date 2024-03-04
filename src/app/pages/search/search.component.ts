import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { VideoComponent } from '../../components/video/video.component';
import { ChannelMetadataComponent } from '../../components/channel-metadata/channel-metadata.component';
import { OverlayPlayerComponent } from '../../components/overlay-player/overlay-player.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MobileNavComponent } from '../../components/mobile-nav/mobile-nav.component';
import { LoginDialogComponent } from '../../components/login-dialog/login-dialog.component';
import { SearchMainComponent } from '../../components/search-main/search-main.component';

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
