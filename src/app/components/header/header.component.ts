import { Component} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'
import { RouterLink, RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','../../../assets/css/themed.css', '../../../assets/css/unthemed.css']
})
export class HeaderComponent {
  constructor(private router: Router) { }

  isCurrentPage(path: string): boolean {
    return this.router.url === path;
  }

  navigateAndReload(path: string): void {
    this.router.navigateByUrl(path).then(() => {
      window.location.reload();
    });
  }
 
  menuVisible: boolean = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  closeMenu() {
    this.menuVisible = false;
  }
  

}
