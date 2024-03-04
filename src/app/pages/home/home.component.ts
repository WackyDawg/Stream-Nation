import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,],
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.css', '../../../assets/css/base-f590e13384cfab2aef934436aa189737dd502a9c-6883-2024-03-01.css', '../../../assets/css/marketing.d0278d61e0f4649d.css']
})
export class HomeComponent {

}
