import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-on-demand',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './on-demand.component.html',
  styleUrls: ['./on-demand.component.css', '../../../assets/css/themed.css', '../../../assets/css/unthemed.css']
})
export class OnDemandComponent {

}
