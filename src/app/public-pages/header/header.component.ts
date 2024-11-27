import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menuOpen = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    // Listen for changes in the viewport size
    this.breakpointObserver
      .observe([Breakpoints.Handset]) // Matches devices with max-width: 959px
      .subscribe((result) => {
        if (!result.matches) {
          // If the screen size is larger than 960px, close the menu
          this.menuOpen = false;
        }
      });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
